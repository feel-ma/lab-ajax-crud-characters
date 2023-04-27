const charactersAPI = new APIHandler('http://localhost:8000');
const axios =require("axios")

class ApiService {
  constructor(){
    this.api=axios.create({
      baseURL:"http://localhost:8000"
    })
  }

  getAllCharacters(){
     return this.api.get("/characters")
  }

  getSingleCharacter(data){
    return this.api.get("/characters:"data)
  }

  createCharacter(data){
    return this.api.post("/characters", data)
  }

  delateSingleCharacter(data){
    return this.api.delate("/characters:"data)
  }
  editSingleCharacter(data){
    return this.api.update("/characters:"data)
  }



}

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {

  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
