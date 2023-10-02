import Image from "next/image";

function Topbar() {
    return (
        <nav className="topbar">
            <div className="flex space-x-4 ml-0.5">
                <Image
                    src='/assets/vsymbol.png'
                    alt="vsymbol"
                    width={24}
                    height={24}
                    className="flex items-start"
                />
                <div className="text-white">
                    File&nbsp;&nbsp;Edit&nbsp;&nbsp;Selection&nbsp;&nbsp;View&nbsp;&nbsp;Go&nbsp;&nbsp;Run&nbsp;&nbsp;Terminal&nbsp;&nbsp;Help&nbsp;&nbsp;
                </div>
            </div>

            <div className="flex text-white">
                Kunal Singh - Visual Studio Code 
            </div>

            <div className="flex space-x-4 mr-4 text-white">
                <div>
                    -
                </div>
                <div>
                    x
                </div>
            </div>
        </nav>
    )
}

export default Topbar;