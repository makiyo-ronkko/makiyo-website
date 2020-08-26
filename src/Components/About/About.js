import React from 'react';

const About = () => {
    return (
        <div className="ui grid">
            <div class="sixteen wide column">
                <div className="ui segment">
                    <div className="header">
                        <h2>My skills and experiences in programming</h2>
                    </div>
                    <a href="//github.com/makiyo-ronkko" target="_blank"><i className="github large black icon"></i>Makiyo's
                        Github Page</a>
                    <div class="ui list">
                        <div class="item">
                            <i class="right triangle icon"></i>
                            <div class="content">
                                <a class="header">HTML5</a>
                                <div class="description">Something...</div>
                            </div>
                        </div>
                        <div class="item">
                            <i class="right triangle icon"></i>
                            <div class="content">
                                <a class="header">CSS3</a>
                                <div class="description">Something...</div>
                            </div>
                        </div>
                        <div class="item">
                            <i class="right triangle icon"></i>
                            <div class="content">
                                <a class="header">JavaScript</a>
                                <div class="description">Something...</div>
                            </div>
                        </div>
                        <div class="item">
                            <i class="right triangle icon"></i>
                            <div class="content">
                                <a class="header">React</a>
                                <div class="description">Something...</div>
                            </div>
                        </div>
                        <div class="item">
                            <i class="right triangle icon"></i>
                            <div class="content">
                                <a class="header">Redux</a>
                                <div class="description">Something...</div>
                            </div>
                        </div>
                        <div class="item">
                            <i class="right triangle icon"></i>
                            <div class="content">
                                <a class="header">Node.js</a>
                                <div class="description">Something...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
