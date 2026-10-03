import { ButtonToggle } from '@/components';
import { LoadingBoundaryProvider } from 'next/dist/build/templates/app-page';

interface SubmitButtonProps{
    loading: boolean;
    loadingText: string;
    children: React.ReactNode;
}

const SubmitButton = ({loading, loadingText, children}: SubmitButtonProps) => {
    return(
        <div className="mt-4">
                <ButtonToggle
                    type="submit"
                    className="w-full bg-accent text-primary font-medium py-2.5 rounded-lg hover:bg-accent/80 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-150"
                >
                    {loading ? loadingText : children}
                </ButtonToggle>
            </div>
    )
}

export default SubmitButton;