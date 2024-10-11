

import { useQuery } from '@tanstack/react-query';
import './App.css'
import UseAxios from './UseAxios';

function App() {
  const axiosPublic = UseAxios()

  const { data: chat = [], refetch } = useQuery({
    queryKey: ['chat'],
    queryFn: async () => {
        const res = await axiosPublic.get('/chat');
        return res.data;
    },
    onError: (err) => {
        console.error("Error fetching menu:", err); // Error handling
    }
});





 const hndleGoogleLogin=(e)=>{
  e.preventDefault();
        const form = e.target;
        const text = form.text.value;
        const message = {
          user: text
        }
        console.log(message);

        axiosPublic.post('/chat', message)
        .then(res => {
          if (res.data.insertedId) {
              console.log('user added sucessfull');
          }
          
      })
      .then(error => {
        console.error(error)
    })

    axiosPublic.get('/chat')
    .then(res=>{
      console.log('user added sucessfull');
      refetch()
    })
    .then(error => {
      console.error(error)
  })
        
 }


  return (
    <>
      <div>
        <h1>{chat.map((item)=> <>{item.user}</>)}</h1>
        <form onSubmit={hndleGoogleLogin}>
        <input className='bg-green-300' type="text" name="text" id="" />
        <input type="submit" value="submit" />
        </form>
      </div>
    </>
  )
}

export default App
