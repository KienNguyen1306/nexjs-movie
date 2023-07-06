
import './title.css'

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className="h2">{children}</h2>;
}

export default Title;
