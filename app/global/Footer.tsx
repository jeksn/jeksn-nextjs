export default function Footer() {

    const currentYear = new Date().getFullYear();

    return (
    <div className="w-full mt-12 mb-6">
        <div className="max-w-screen-lg py-6 mx-auto">
            <div className="flex justify-center">
                <span className="text-sm text-white/80">Copyright © { currentYear } Johan Eriksson / jeksn</span>
            </div>
        </div>
    </div>
    )
}
