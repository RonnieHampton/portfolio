import './Content.css'

type ContentProps = {
  children: React.ReactNode
}

function Content({ children }: ContentProps) {
  return <section className="content">{children}</section>
}

export default Content