import { Maxwidthwrapper } from "./maxwidthwrapper"
import Link from "next/link"
import{SignOutButton} from "@clerk/nextjs"
import { Button } from "./ui/button";
export const Navbar=()=>{
    const user =false;

    return(
        <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
            <Maxwidthwrapper>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex z-40 font-semibold">
                    All<span className="text-brand-700">Info</span>
                    </Link>
                    <div className="">
                        {
                            user ? <>
                            <SignOutButton>
                                <Button>
                                    
                                </Button>
                            </SignOutButton>

                            </>:null
                        }
                    </div>
                </div>
            </Maxwidthwrapper>
        </nav>
    )
}