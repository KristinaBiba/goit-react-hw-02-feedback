import { Title } from "./Section_css";

export const Section = ({ title, children }) => {
    return (
        <section>
            <Title>{title}</Title>
            {children}
        </section>);
}
          