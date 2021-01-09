import { useState } from 'react';
import React from 'react';
import './BlogGrid.css';
import { Link } from 'react-router-dom';

export default function BlogGrid() {
    const [currentOpenedBlog, setCurrentOpenedBlog] = useState(null);

    const onBlogClicked = ({ target, currentTarget }) => {
        // using currentTarget bcoz it contains the parent div :-)
        setCurrentOpenedBlog(currentTarget.id);
    }

    const restore = () => {
        setCurrentOpenedBlog(null);
    }

    return (
        <div className="featured-area">
            {
                currentOpenedBlog
                    ? <button onClick={restore} className="restoreButton"></button>
                    : null
            }
            <div class="featured-grid-container">
        <Link to="/blog/5fb6437c0be0a24f50001594" class="left_container" id="5fb6437c0be0a24f50001594">
                <img src="https://images.unsplash.com/photo-1594636797501-ef436e157819?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="big featured img" width="100%" height="100%"/>
                <div class="grid-content">
                    <div class="big-title">Clean workstation setup 2021</div>
                    <div class="big-title-description">here are some beautiful workstation Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci qui, magni voluptate necessitatibus consectetur porro autem maxime neque sequi suscipit, laborum eaque nulla nostrum quo, error fuga perferendis praesentium sint.</div>
                </div>
        </Link>
        <div class="right_container">
            <div class="items item1">
                <img src="https://images.unsplash.com/photo-1546433970-ae3c35917a58?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" width="100%" height="100%"/>
                <div class="grid-content">
                    <div class="small-title">Best laptop to buy in 2021</div>
                    <div class="small-title-description">here are some beautiful workstation Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci qui, magni voluptate necessitatibus consectetur porro autem maxime neque sequi suscipit, laborum eaque nulla nostrum quo, error fuga perferendis praesentium sint.</div>
                </div>
            </div>
            <div class="items item2" >
                <img src="https://images.unsplash.com/photo-1547082299-de196ea013d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="big featured img" width="100%" height="100%"/>
                <div class="grid-content">
                    <div class="small-title">Apple workstation setup 2021</div>
                    <div class="small-title-description">here are some beautiful workstation Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci qui, magni voluptate necessitatibus consectetur porro autem maxime neque sequi suscipit, laborum eaque nulla nostrum quo, error fuga perferendis praesentium sint.</div>
                </div>
            </div>
            <div class="items item3" >
                <img src="https://images.unsplash.com/flagged/photo-1572609239482-d3a83f976aa0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="big featured img" width="100%" height="100%"/>
                <div class="grid-content">
                    <div class="small-title">Best OLED tv</div>
                    <div class="small-title-description">here are some beautiful workstation Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci qui, magni voluptate necessitatibus consectetur porro autem maxime neque sequi suscipit, laborum eaque nulla nostrum quo, error fuga perferendis praesentium sint.</div>
                </div>
            </div>
            <div class="items item4" >
                <img src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="big featured img" width="100%" height="100%"/>
                <div class="grid-content">
                    <div class="small-title">Smartphone for coding?</div>
                    <div class="small-title-description">here are some beautiful workstation Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci qui, magni voluptate necessitatibus consectetur porro autem maxime neque sequi suscipit, laborum eaque nulla nostrum quo, error fuga perferendis praesentium sint.</div>
                </div>
            </div>
        </div>
    </div>
            {/* <div className="featured-grid-container">
            
                <Link to="/blog/5fb6437c0be0a24f50001594" className={`left_container`} id="5fb6437c0be0a24f50001594">
                    
                    <div className="primary_text">The DualSense Maybe A Hit But The PS5 Isn’t Without Its Woes</div>
                    <div className="secondary_text">The next generation of consoles are here. Read our full and comprehensive review of the new Sony's Play Station 5 here.</div>
                </Link>

                <div className="secondary_blogs">

                    <Link to="/blog/5f8833e08d701362ab27288a" className={`secondary_blog`} onClick={onBlogClicked} id="">
                        <img src="https://static.digit.in/default/9f76b34e645d5c8aae04b31d2164fd068daf3ee4.jpeg" alt="" />
                        <div className="primary_text">PUBG Mobile Coming Back To India</div>
                        <div className="secondary_text">Here is all you need to know</div>
                    </Link>

                    <Link to="/blog/5f8832e08d701362ab272889" className={`secondary_blog`} onClick={onBlogClicked} id="">
                        <img src="https://static.digit.in/default/a66ed60813f91f21b1d48ba09ee31af6b86014bd.jpeg" alt="" />
                        <div className="primary_text">GAMING OR PRODUCTIVITY? WHY NOT BOTH</div>
                        <div className="secondary_text">Check out MSI's latest offering</div>
                    </Link>

                    <Link to="/blog/5f8833e08d701362ab27288a" className={`secondary_blog`} onClick={onBlogClicked} id="">
                        <img src="https://static.digit.in/default/816f0535d0e998ee5514d05682c39a104d573182.jpeg" alt="" />
                        <div className="primary_text">NOKIA 3.4, NOKIA 2.4 COULD LAUNCH ON NOVEMBER 26 AS TEASERS GO LIVE</div>
                        <div className="secondary_text">Acer Antimicrobial Solutions</div>
                    </Link>

                    <Link to="/blog/5f8831618d701362ab272888" className={`secondary_blog`} onClick={onBlogClicked} id="">
                        <img src="//static.acer.com/up/Resource/Acer/Antimicrobial_Solutions/20200813/antimicrobial-acertertiarybanner.jpg" alt="" />
                        <div className="primary_text">Protection For The Modern Era</div>
                        <div className="secondary_text">Acer Antimicrobial Solutions</div>
                    </Link>

                </div>
            </div> */}
        </div>
    )
}
