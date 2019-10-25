    import React, { Component } from 'react'

    import Nav from './top-nav';
    import SideBar from './side-nav';

    class Home extends Component {
    render() {
        return (
        <div id="wrapper">
            <Nav/>
            <SideBar/>
            <div id="page-wrapper">
                <div class="container-fluid">
                    <div class="row bg-title">
                        <div class="col-sm-6 col-xs-12">
                            <h4 class="page-title">Hi admin, welcome back today.</h4>
                        </div>
                        <div class="col-lg-6 col-sm-6 col-md-6 col-xs-12">
                            <ol class="breadcrumb">
                                
                            </ol>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="white-box">
                                <div class="row">
                                    <div class="col-sm-12 col-md-6 col-lg-6">
                                        <h3 class="box-title">Credit User Account</h3>
                                        <form name="credit" class="form-horizontal" action="process-credit.php" method="post">
                                            <div class="form-group row">
                                                <label class="col-sm-3 control-label col-form-label">Credit User</label>
                                                <div class="col-sm-9">
                                                    <select name="user" class="form-control ">
                                                        <option value="">--Select User to Credit--</option>
                                                        {/* <!--the following code fetches the names of all the users in the database  -->
                                                        <?php
                                                        if ($row= mysqli_num_rows($query) > 0)  {
                                                        while($row = mysqli_fetch_assoc($query)) {
                                                            $fname = $row['firstname'];
                                                            $sname = $row['surname'];
                                                            $loginId = $row['login_id'];
                                                            
                                                            echo "<option value='".$loginId."'>$sname $fname -- $loginId </option>";
                                                        }
                                                            }

                                                        ?> */}

                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-3 control-label col-form-label">Amount</label>
                                                <div class="col-sm-9">
                                                <div class="input-group">
                                                    <span class="input-group-addon">$</span>
                                                    <input type="text" name="amt" class="form-control" aria-label="Amount (to the nearest dollar)"/>
                                                    <span class="input-group-addon">.00</span>
                                                </div>
                                                </div>
                                            </div>
                                            <div class="form-group m-b-0">
                                                <div class="offset-sm-3 col-sm-9">
                                                    <button type="submit" name="submit" class="button-box btn btn-info" >Credit Account</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="footer text-center"> MooncuPays 2019</footer>
            </div>
        </div>

        )
    }
}

export default Home;
