import React, { useEffect, useState } from "react";
import api from "./api/api";

const Classifica = () => {
  const [classifica, setClassifica] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await api.get("classifica").then((res) => {
        console.log(res.data.data);
        setClassifica(res.data.data);
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        class="w-screen h-screen flex justify-center 
    bg-gradient-to-br from-[#262A73] to-[#060044] "
      >
        <div class="flex flex-col my-auto">
          <h3 className="text-white text-center font-semibold w-full text-2xl my-3">
            CLASSIFICA
          </h3>
          <div class="overflow-x-auto shadow-white shadow-md rounded-lg m-1">
            <div class="inline-block min-w-full">
              <div class="overflow max-h-[550px]">
                <table class="w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                  <thead class="bg-gray-100 dark:bg-gray-700 row">
                    <tr>
                      <th scope="col" class="p-4 w-1/12">
                        <div class="flex items-center justify-center text-gray-700 uppercase dark:text-gray-400">
                          #
                        </div>
                      </th>
                      <th
                        scope="col"
                        class="w-4/12 py-3 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400"
                      >
                        Utente
                      </th>
                      <th
                        scope="col"
                        class="w-3/12 py-3 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400"
                      >
                        Punteggio
                      </th>
                      <th
                        scope="col"
                        class="w-3/12 py-3 text-xs font-medium tracking-wider text-center text-gray-700 uppercase dark:text-gray-400"
                      >
                        Tempo
                      </th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    {classifica.map((c, index) => (
                      <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                        <td class="p-4 w-4">
                          <div class="flex items-center justify-center text-gray-500 dark:text-white">
                            {index + 1}
                          </div>
                        </td>
                        <td class="py-4 px-6 text-sm text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {c.Utente}
                        </td>
                        <td class="py-4 px-6 text-sm text-center font-medium text-gray-500 whitespace-nowrap dark:text-white">
                          {c.Punteggio}/15
                        </td>
                        <td class="py-4 px-6 text-sm text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {c.Tempo} sec
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Classifica;
