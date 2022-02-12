
body {
  padding-top: 40px;
}

/* Centered Menu */
.navbar.has-centered-menu {
  .navbar-start {
    flex-grow: 1;
    justify-content: center;
  }
}

/* Centered Logo Collapsed*/
.navbar.has-centered-logo {
  .navbar-start,
  .navbar-end{
    flex: 1 1 0;
  }
  .navbar-start {
    justify-content: flex-end;
  }
  .navbar-end {
    justify-content: flex-start;
  }
  .navbar-start:after,
  .navbar-end:before{
    /*content:'';
    display:inline-block;*/
  }
  .navbar-brand {
  }
}

/* Centered Logo Expanded*/
.navbar.has-centered-logo-alt {
  .navbar-start,
  .navbar-end{
    flex: 1 1 0;
  }
}

/* Centered Logo Above */
.navbar.has-logo-above {
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Centered Logo With additional Menu*/
.navbar.has-centered-logo-alt2 {
  .navbar-menu {
    flex-wrap: wrap;
  }
  .navbar-start,
  .navbar-end{
    flex: 1 1 0;
  }
  .navbar-wide.navbar-start {
    flex: 1 1 100%;
    justify-content: center;
  }
}
