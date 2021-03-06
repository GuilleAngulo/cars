import Button from 'components/Button';

export interface CarNotFoundProps {
    text: string;
    backButton?: boolean;
    buttonText?: string;
    buttonPath?: string;
}

export default function CarNotFound({ text, backButton = true }: CarNotFoundProps) {
    return (
        <div className="flex justify-center">
            <div className="w-full text-center m-20">
                <h1 className="font-sans font-bold tracking-tight text-2xl antialiased italic mb-5">
                    {text}
                </h1>
                <div className="flex justify-center">
                    <img src="/car-not-found.png" alt={text} width="450px" />
                </div>
                {backButton && <Button classType={'back'} />}
            </div>
        </div>
    );
}
