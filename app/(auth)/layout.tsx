import { ReactNode } from "react";



export default function Authlayout({children}:{children : ReactNode}){
return(<> <div>This is the header  </div> {children} <div> This is the footer </div> </>)
}