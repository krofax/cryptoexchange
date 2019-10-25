    import React from 'react';


    const Nav = () => {
    return (
        <nav class="navbar navbar-default navbar-static-top m-b-0">
                <div class="navbar-header">
                    <a class="navbar-toggle hidden-sm hidden-md hidden-lg " href="/" data-toggle="collapse" data-target=".navbar-collapse"><i class="ti-menu"></i></a>
                    <div class="top-left-part">
                    </div>
                    <ul class="nav navbar-top-links navbar-left hidden-xs">
                        <li><a href="/" class="open-close hidden-xs waves-effect waves-light"><i class="icon-arrow-left-circle ti-menu"></i></a></li>
                    </ul>
                </div>
                <a class="dropdown-toggle waves-effect waves-light" data-toggle="dropdown" href="/"><i class="icon-envelope"></i>
                <div class="notify"><span class="heartbit"></span><span class="point"></span></div>
                </a>
            </nav>
    );
    }

    export default Nav;
