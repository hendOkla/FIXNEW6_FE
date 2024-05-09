import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const BlogSidebar = () => {
    return (
        <>
            <div className="widget-area" id="secondary">
                <div className="widget widget_search">
                    <form className="search-form">
                        <label>
                            <input type="search" className="search-field" placeholder="Search..." />
                        </label>
                        <button type="submit">
                            <Icon.Search />
                        </button>
                    </form>
                </div>

                <div className="widget widget_startp_posts_thumb">
                    <h3 className="widget-title">Popular Posts</h3>

                    <article className="item">
                        <Link href="/blog-details" className="thumb">
                            <span className="fullimage cover bg1" role="img"></span>
                        </Link>

                        <div className="info">
                            <time>June 10, 2022</time>
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    Making Peace With The Feast Or Famine Of Freelancing
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link href="/blog-details" className="thumb">
                            <span className="fullimage cover bg2" role="img"></span>
                        </Link>
                        <div className="info">
                            <time>June 21, 2022</time>
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    I Used The Web For A Day On A 50 MB Budget
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <Link href="/blog-details" className="thumb">
                            <span className="fullimage cover bg3" role="img"></span>
                        </Link>
                        <div className="info">
                            <time>June 30, 2022</time>
                            <h4 className="title usmall">
                                <Link href="/blog-details">
                                    How To Create A Responsive Popup Gallery?
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>
                </div>

                <div className="widget widget_categories">
                    <h3 className="widget-title">Categories</h3>

                    <ul>
                        <li>
                            <Link href="/blog-1">
                                Business
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog-1">
                                Privacy
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog-1">
                                Technology
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog-1">
                                Tips
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog-1">
                                Uncategorized
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="widget widget_tag_cloud">
                    <h3 className="widget-title">Tags</h3>

                    <div className="tagcloud">
                        <Link href="/blog-1">
                            IT <span className="tag-link-count">(3)</span>
                        </Link>

                        <Link href="/blog-1">
                            Spacle <span className="tag-link-count">(3)</span>
                        </Link>

                        <Link href="/blog-1">
                            Games <span className="tag-link-count">(2)</span>
                        </Link>

                        <Link href="/blog-1">
                            Fashion <span className="tag-link-count">(2)</span>
                        </Link>

                        <Link href="/blog-1">
                            Travel <span className="tag-link-count">(1)</span>
                        </Link>

                        <Link href="/blog-1">
                            Smart <span className="tag-link-count">(1)</span>
                        </Link>

                        <Link href="/blog-1">
                            Marketing <span className="tag-link-count">(1)</span>
                        </Link>

                        <Link href="/blog-1">
                            Tips <span className="tag-link-count">(2)</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogSidebar;  