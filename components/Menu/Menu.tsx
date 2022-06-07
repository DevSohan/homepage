import Button4 from "../Button4/Button4";
import Button6 from "../Button6/Button6";
import Button7 from "../Button7/Button7";

type Props = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    languages: {
        text: string
    },
    children: React.ReactNode
    backdropBlur: boolean

}
export default function Menu({isOpen, setIsOpen, languages, children, backdropBlur}: Props){
    return (
        <div className="flex flex-col justify-between h-full text-center py-8 sm:py-10">
            <div className="relative flex justify-center items-center">
                <Button4 isOpen={isOpen} setIsOpen={setIsOpen} backdropBlur={backdropBlur} />
            </div>
            <div className="flex flex-col space-y-12 sm:space-y-14 mt-4">
                <div className="flex flex-col space-y-2 sm:space-y-4 mx-auto text-center">
                    {children}
                </div>  
                <div className="">
                    <Button7 type="button" text={languages.text} disabled={true} backdropBlur={backdropBlur} />
                </div>
            </div>
            <div className="mx-auto">
                <Button6 setIsOpen={setIsOpen} link="/" replace={true} />
            </div>
        </div>
    )
}