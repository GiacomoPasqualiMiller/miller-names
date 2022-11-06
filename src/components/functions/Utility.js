//

<div className="px-2">
        {/* Card Container */}
        <div className="w-full relative flex flex-row flex-nowrap justify-center">
          {/* Sinistra */}
          <div className="absolute top-10 left-0 z-0 h-[170px] w-1/3 flex rounded overflow-hidden shadow-white shadow-lg drop-shadow-lg bg-white opacity-75">
            <h3 className="text-center w-full">Surname Game</h3>
          </div>
          {/* Centrale */}
          <div className="h-[250px] relative w-1/2 flex justify-center self-center rounded overflow-hidden shadow-sm bg-white z-10" onClick={() => navigate('/nome', {state: {rightAnswer: goodStickerPop(), badAnswer: badStickerPop(), millers: miller}})}>
            <h3 className="text-center w-full">Name Game</h3>
          </div>
          {/* Destra */}
          <div className="absolute top-10 right-0 z-0 h-[170px] w-1/3 flex rounded overflow-hidden shadow-white shadow-lg  bg-white opacity-75">
            <h3 className="text-center w-full">Photo Game</h3>
          </div>
        </div>
        </div>