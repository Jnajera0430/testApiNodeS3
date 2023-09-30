import { ChangeEvent, FormEvent, useState } from 'react'
import axios from 'axios';
export interface IPost {
  title: string;
  photos: File| '';
}
export enum InputEnum {
  TITLE = 'title',
  PHOTOS = 'photos'
}

function App() {
  const [post, setPost] = useState<IPost>({
    title: '',
    photos: ''
  });

  const handleClickGetFile = async () =>{
    const response = await axios.get('http://localhost:8000/upload/SALIDA4028.png');
    console.log({
      response
    });
    
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name == InputEnum.TITLE) {
      setPost((state: IPost) => ({
        ...state,
        [e.target.name]: e.target.value
      }));
    }

    if (e.target.name == InputEnum.PHOTOS) {
      setPost((state: IPost) => ({
        ...state,
        [e.target.name]: e.target.files?.item(0)
      }));
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photos', post.photos);
    const response = await axios.post('http://localhost:8000/upload',formData,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    });
    console.log({ response });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Titulo: </label>
        <input type="text" name={InputEnum.TITLE} onChange={handleChange} />
        <label htmlFor="">Archivo: </label>
        <input type="file" name={InputEnum.PHOTOS} onChange={handleChange} />
        <button>Subir</button>
      </form>

      <div>
        <button onClick={handleClickGetFile}>Obtener</button>
      </div>
    </>
  )
}

export default App
