export default function Card({children, className, ...props}){
    let classs = className + ' border solid border-black rounded w-1/4 flex p-5 m-5 absolute'
    console.log(classs)
    return(
        <>
            <div className={classs} {...props}>
                {children}
            </div>
        </>
    )
}