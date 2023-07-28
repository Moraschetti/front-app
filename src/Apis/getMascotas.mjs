import axios from "axios";

export const getMascotas = async () => {
  try {
    const response = await axios.get('http://localhost:3003/pets');
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log('Error:', error);
  }
};

/*const API = 'http://localhost:3003/pets'

export const getMascotas = async() => {

}*/ 