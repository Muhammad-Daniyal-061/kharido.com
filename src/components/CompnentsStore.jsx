

function Button ({props}){
    return(
        <>
             <button className="bg-blue-950 hover:bg-black text-amber-50 text-2xl w-16  p-1 rounded cursor-pointer h-12">
               {props}
            </button>
        </>
    )
}

export {Button}