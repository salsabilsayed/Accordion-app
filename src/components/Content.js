
import Question from "./Question";
import questions from "../Data";

const Content = () => {

        return (
            <div className="flex flex-col md:flex-row md:justify-between items-start mx-auto">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 md:w-2/5 lg:w-1/3 tracking-wider">Questions And Answers About Login</h1>
                <div className="w-full lg:w-2/3">
                    {questions.map(question => <Question key={question.id}
                        data={{
                            title:question.title,
                            info:question.info
                        }}
                    /> )}
                </div>
                
            </div>
        )
    
}

export default Content;