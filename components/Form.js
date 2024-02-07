

export default function Form() {
    return (
        <div className="flex justify-center">
            <div className="flex felx-row justify-center pl-4 relative ">
                <div className="">
                    <input type="text" className="text-white rounded-md px-3 w-[400px] h-[35px] text-sm bg-[#1e1c20] focus:outline-none " placeholder="Enter a city" />
                </div>
                <div className="">
                    <button className=" w-[100px] h-[35px] bg-[#7737d1] rounded-md text-sm absolute left-[320px]">
                        Add City
                    </button>
                </div>
            </div>
        </div>
    )
}
