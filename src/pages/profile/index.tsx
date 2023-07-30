import ProfileLayout from "../../layouts/profile-layout";
import QuestionCard from "../../components/question-card";

export default function Profile() {
    return (
        <ProfileLayout>
            <div className="flex flex-col gap-4">
                {[...Array(10)].map((_,i) => (
                    <QuestionCard key={i} rounded={false}/>
                ))}
            </div>
        </ProfileLayout>
    )
}