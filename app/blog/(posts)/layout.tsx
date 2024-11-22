import BackToBlog from '@/app/components/BackToBlog'

export default function MdxLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-32">
            {children}
            <BackToBlog />
        </div>
    )
  }