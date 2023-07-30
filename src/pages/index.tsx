import PublicLayout from "../layouts/public-layout";
import QuestionCard from "../components/question-card";


export default function HomePage() {

    return (
        <PublicLayout>
            {[...Array(100)].map((_, i) => (
                <QuestionCard rounded={true} key={i}/>
            ))}
        </PublicLayout>
    )
}