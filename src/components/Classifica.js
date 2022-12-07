import React, { useEffect,useState } from "react";
import api from "./api/api";



const Classifica = () =>{
const [classifica,setClassifica] = useState([])

useEffect(() => {
    const fetchData = async () =>{
        await api.get('classifica')
        .then( res=> {
console.log(res.data.data)
            setClassifica(res.data.data);
        })


}

fetchData()

},[]);
   
    
return(

<>

<div class="w-screen h-screen flex justify-center 
    bg-gradient-to-br from-[#262A73] to-[#060044] ">

	<div class="flex flex-col">
    <h3 className="text-white">Classifica</h3>
    <div class="overflow-x-auto shadow-md sm:rounded-lg">
        <div class="inline-block min-w-full ">
            <div class="overflow-hidden ">
           
                <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                    <thead class="bg-gray-100 dark:bg-gray-700">
                        <tr>
                            <th scope="col" class="p-4">
                                <div class="flex items-center">
#
                                </div>
                            </th>
                            <th scope="col"  class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                               Utente
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Punteggio
                            </th>
                            <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                Tempo
                            </th>
                        
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                       
                        
                      {classifica.map((c,index) =>
                      
                      <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td class="p-4 w-4">
                          <div class="flex items-center">
                            {index+1}
                          </div>
                      </td>
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{c.Utente}</td>
                      <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">{c.Punteggio}</td>
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{c.Tempo}</td>
                 
                  </tr>
                      )



                      }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</div>
</>

)

}

export default Classifica;