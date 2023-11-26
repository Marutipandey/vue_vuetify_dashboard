 <template>
    <div>
      <h2 v-if="show">if condition</h2>
      <!-- <h2 v-else>else condition</h2> -->
      <button v-on:click="show = !show" style="background-color: black; color:white">Toggle</button>
  
      <h1>Get Checkbox & Radio Button Value</h1>
      <h3>Technology</h3>
  
      <label for="java">Java</label>
      <input type="checkbox" value="JAVA" v-model="technology" id="java">
  
      <label for="php">Php</label>
      <input type="checkbox" value="PHP" v-model="technology" id="php">
  
      <label for="node">Node</label>
      <input type="checkbox" value="NODE" v-model="technology" id="node">
  
      <h2>Selected technology: {{ technology }}</h2>
  
      <br><br>
      <h3>Who I am</h3>
  
      <label for="student">Student</label>
      <input type="radio" value="STUDENT" id="student" name="who" v-model="who">
  
      <label for="developer">Developer</label>
      <input type="radio" value="DEVELOPER" id="developer" name="who" v-model="who">
  
      <h2>Selected role: {{ who }}</h2>
      <ul>
        <li v-for="item in technologyyy" :key="item">
          {{ item }}
        </li>
      </ul>
  
      <ul>
        <li v-for="itemm in user" :key="itemm">
          Name is: {{ itemm.name }} and email is: {{ itemm.email }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomeS",
   
    data() {
      return {
        show: false,
        technology: [],
        who: null,
        technologyyy: ['node', 'python', 'java', 'html', 'css'],
        user: [
          {
            name: 'sonam',
            email: 'asdf@gmail.com'
          },
          {
            name: 'sonam',
            email: 'asdf@gmail.com'
          },
          {
            name: 'sonam',
            email: 'asdf@gmail.com'
          }
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: green;
  }
  </style>
  