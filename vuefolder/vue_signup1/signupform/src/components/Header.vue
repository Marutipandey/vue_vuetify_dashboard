<template>
    <header class="sticky-top ">
      <nav class="navbar navbar-expand-lg" style="background-color:#0f1724">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <form class="d-flex">
              <input
                class="form-control me-2 searchh"
                type="search"
                placeholder="Search Anything"
                aria-label="Search"
                style="border-radius: 20px; background-color: #222935;"
              />
            </form>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active navcolor mt-2" aria-current="page" href="#" >
                Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link navcolor mt-2" href="#">
                  Add Restaurant
                </a>
              </li>
  
              <li class="nav-item">
                <a class="nav-link navcolor mt-2" href="#">
                  Update Restaurant
                </a>
              </li>
  
              <li class="nav-item">
                <a class="nav-link navcolor mt-2" @click="logout" href="#">
                  Logout
                </a>
              </li>
  
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <button type="button" class="btn btn-dark position-relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="white"
                      class="bi bi-bell-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"
                      />
                    </svg>
                    <span
                      class="position-absolute top-0 start-100 translate-middle p-1 bg-primary border border-light rounded-circle"
                      style="width: 5px !important"
                    >
                      <span class="visually-hidden">New alerts</span>
                    </span>
                  </button>
                </a>
              </li>
  
              <li class="nav-item mt-2">
                <a class="nav-link" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="white"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderR',
    methods: {
      logout() {
        localStorage.clear();
        this.$router.push({name:'Login'})
      },
    }, 
  };
  </script>
  
  <style>
  .navcolor {
    color: white !important;
  }
  
  .searchh:hover {
    background-color: #bbbec2 !important;
  }
  </style>
  