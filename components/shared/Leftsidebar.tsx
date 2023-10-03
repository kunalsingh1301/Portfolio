import { lefsidebarsvg ,leftsidesvgend} from '@/constants/leftside.js'
import Link from 'next/link'
function Leftsidebar() {
    return (
        <section className="leftsidebar custom-scrollbar justify-between">
            <div className="flex w-full flex-1 flex-col gap-6 px-6">
                {
                    lefsidebarsvg && lefsidebarsvg.map((item) => {
                        return (
                            <Link key={item.id} href={`${item.route}`}>
                            <div
                            
                                dangerouslySetInnerHTML={{ __html: item.svg }}
                            />
                            </Link>
                        )
                    })
                }
            </div>

            <div className="mt-10 flex flex-col gap-6 px-6">
                {
                    leftsidesvgend && leftsidesvgend.map((item)=>{
                        return(
                            <div
                            key={item.id}
                                dangerouslySetInnerHTML={{ __html: item.svg }}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Leftsidebar