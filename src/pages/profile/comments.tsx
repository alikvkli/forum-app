import ProfileLayout from "../../layouts/profile-layout";
import QuestionCard from "../../components/question-card";
import Comment from "../../components/question-card/comment";

export default function Comments(){
    return (
        <ProfileLayout>
            <div className="flex flex-col bg-[#fff] py-2 px-4 gap-4">
                {[...Array(5)].map((_,i) => (
                    <Comment key={i}/>
                ))}
            </div>
        </ProfileLayout>
    )
}