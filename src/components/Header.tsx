
import { Logo } from "./Logo";

export function Header() {

    return (
        <div className="flex md:block">
            <header className="w-full justify-between py-5 flex items-center md:justify-center bg-gray-700 border-b border-gray-600">
                <div className="ml-5 md:ml-0">
                    <Logo />
                </div>
                <div className="flex cursor-pointer mr-5 md:hidden gap-4">
                    <p>Aulas</p>
                    <div className="space-y-2">
                        <div className="w-8 h-0.5 bg-blue-500"></div>
                        <div className="w-8 h-0.5 bg-blue-500"></div>
                        <div className="w-8 h-0.5 bg-blue-500"></div>
                    </div>
                </div>
            </header>
        </div>
    )
}