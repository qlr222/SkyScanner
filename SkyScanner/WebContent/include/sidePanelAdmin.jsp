<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

	<!-- Left Panel --> 
    <aside id="left-panel" class="left-panel">
        <nav class="navbar navbar-expand-sm navbar-default"> 
        
            <div id="main-menu" class="main-menu collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active">
                        <a href="<%=request.getContextPath()%>/admin?cmd=adminPage"><i class="menu-icon fa fa-cogs"></i>Dashboard</a>
                    </li>
                    
                    <!-- 회원관리 -->
                    <li class="menu-title">Members</li><!-- /.menu-title -->
                    
                    <li class="menu-item-has-children dropdown">
                        <a href="<%=request.getContextPath()%>/admin?cmd=adminUsers" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-users"></i>회원관리</a>                       
                                        
                    </li>
                    <!-- 드롭다운 필요할 시 사용 -->
                    <!-- <li class="menu-item-has-children dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-table"></i>Tables</a>
                        <ul class="sub-menu children dropdown-menu">
                            <li><i class="fa fa-table"></i><a href="tables-basic.html">Basic Table</a></li>
                            <li><i class="fa fa-table"></i><a href="tables-data.html">Data Table</a></li>
                        </ul>
                    </li> -->

					<!-- 문의관리 -->
                    <li class="menu-title">Boards</li><!-- /.menu-title -->

                    <li class="menu-item-has-children dropdown">
                        <a href="<%=request.getContextPath()%>/admin?cmd=adminCS" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-quote-right"></i>문의관리</a>
                    </li>                    

                    <!-- 기타 -->
                    <li class="menu-title">Extras</li><!-- /.menu-title -->
                    
                    <li class="menu-item-has-children dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-glass"></i>Pages</a>
                        <ul class="sub-menu children dropdown-menu">
                            <li><i class="menu-icon fa fa-sign-in"></i><a href="page-login.html">Login</a></li>
                            <li><i class="menu-icon fa fa-sign-in"></i><a href="page-register.html">Register</a></li>
                            <li><i class="menu-icon fa fa-paper-plane"></i><a href="pages-forget.html">Forget Pass</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
            
        </nav>
    </aside><!-- /#left-panel --> 
    <!-- Left Panel --> 