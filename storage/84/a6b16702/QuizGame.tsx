import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { AlertCircle, CheckCircle2, Trophy, Timer, ArrowRight, RotateCcw } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import confetti from 'canvas-confetti';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  explanation?: string;
}

// Sample quiz questions across different categories
const quizQuestions: Question[] = [
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1,
    category: "Space",
    difficulty: "easy",
    explanation: "Mars is called the Red Planet because it appears reddish in color due to iron oxide (rust) on its surface."
  },
  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    correctAnswer: 2,
    category: "Geography",
    difficulty: "easy",
    explanation: "Tokyo is the capital and largest city of Japan."
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
    correctAnswer: 1,
    category: "Art",
    difficulty: "easy",
    explanation: "The Mona Lisa was painted by Italian artist Leonardo da Vinci between 1503 and 1519."
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Gd", "Au", "Ag"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "easy",
    explanation: "The chemical symbol Au comes from the Latin word for gold, 'aurum'."
  },
  {
    question: "Which of these is NOT a programming language?",
    options: ["Python", "Java", "Cougar", "Ruby"],
    correctAnswer: 2,
    category: "Technology",
    difficulty: "easy",
    explanation: "Cougar is not a programming language. Python, Java, and Ruby are all popular programming languages."
  },
  {
    question: "Who wrote the Harry Potter series?",
    options: ["J.R.R. Tolkien", "J.K. Rowling", "Stephen King", "George R.R. Martin"],
    correctAnswer: 1,
    category: "Literature",
    difficulty: "easy",
    explanation: "The Harry Potter series was written by British author J.K. Rowling."
  },
  {
    question: "What year did the Titanic sink?",
    options: ["1910", "1912", "1915", "1921"],
    correctAnswer: 1,
    category: "History",
    difficulty: "easy",
    explanation: "The Titanic sank on its maiden voyage in April 1912 after hitting an iceberg."
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Osmium", "Oxygen", "Oganesson", "Olerium"],
    correctAnswer: 1,
    category: "Science",
    difficulty: "easy",
    explanation: "O is the chemical symbol for Oxygen, which makes up about 21% of Earth's atmosphere."
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: 3,
    category: "Geography",
    difficulty: "easy",
    explanation: "The Pacific Ocean is the largest and deepest ocean on Earth, covering more than 30% of the Earth's surface."
  },
  {
    question: "Who is known as the 'Father of Modern Physics'?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
    correctAnswer: 1,
    category: "Science",
    difficulty: "medium",
    explanation: "Albert Einstein is often referred to as the Father of Modern Physics for his theory of relativity and contributions to quantum mechanics."
  },
  {
    question: "In which year did World War II end?",
    options: ["1943", "1945", "1947", "1950"],
    correctAnswer: 1,
    category: "History",
    difficulty: "medium",
    explanation: "World War II ended in 1945 with the surrender of Nazi Germany in May and Japan in September."
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correctAnswer: 2,
    category: "Mathematics",
    difficulty: "easy",
    explanation: "2 is the smallest prime number. A prime number is a natural number greater than 1 that is not divisible by any number other than 1 and itself."
  },
  {
    question: "Which famous scientist developed the theory of evolution by natural selection?",
    options: ["Isaac Newton", "Charles Darwin", "Albert Einstein", "Galileo Galilei"],
    correctAnswer: 1,
    category: "Science",
    difficulty: "medium",
    explanation: "Charles Darwin published 'On the Origin of Species' in 1859, introducing the scientific theory of evolution by natural selection."
  },
  {
    question: "What's the national flower of Japan?",
    options: ["Cherry Blossom", "Chrysanthemum", "Lotus", "Rose"],
    correctAnswer: 0,
    category: "Culture",
    difficulty: "medium",
    explanation: "The Cherry Blossom (Sakura) is Japan's national flower and holds cultural significance in Japanese traditions."
  },
  {
    question: "Which of these is NOT one of the Seven Wonders of the Ancient World?",
    options: ["The Great Pyramid of Giza", "The Colosseum", "The Hanging Gardens of Babylon", "The Lighthouse of Alexandria"],
    correctAnswer: 1,
    category: "History",
    difficulty: "medium",
    explanation: "The Colosseum in Rome is not one of the Seven Wonders of the Ancient World. It's sometimes included in lists of modern wonders."
  },
  {
    question: "What is the most abundant gas in Earth's atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "medium",
    explanation: "Nitrogen makes up approximately 78% of Earth's atmosphere."
  },
  {
    question: "Which country has won the most FIFA World Cup tournaments?",
    options: ["Germany", "Italy", "Argentina", "Brazil"],
    correctAnswer: 3,
    category: "Sports",
    difficulty: "medium",
    explanation: "Brazil has won the FIFA World Cup a record 5 times (1958, 1962, 1970, 1994, 2002)."
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Platinum", "Diamond", "Titanium"],
    correctAnswer: 2,
    category: "Science",
    difficulty: "easy",
    explanation: "Diamond is the hardest known natural material on Earth, composed of carbon atoms arranged in a crystal structure."
  },
  {
    question: "Which of these characters was NOT created by Disney?",
    options: ["Mickey Mouse", "Donald Duck", "Bugs Bunny", "Goofy"],
    correctAnswer: 2,
    category: "Entertainment",
    difficulty: "medium",
    explanation: "Bugs Bunny was created by Warner Bros., not Disney. He first appeared in the short film 'A Wild Hare' in 1940."
  },
  {
    question: "What's the largest internal organ in the human body?",
    options: ["Heart", "Brain", "Liver", "Lungs"],
    correctAnswer: 2,
    category: "Biology",
    difficulty: "medium",
    explanation: "The liver is the largest internal organ in the human body, performing hundreds of essential functions."
  }
];

interface GameStats {
  gamesPlayed: number;
  correctAnswers: number;
  wrongAnswers: number;
  bestScore: number;
  fastestTime: number;
}

const QUIZ_LENGTH = 10;
const TIME_PER_QUESTION = 15; // seconds

export default function QuizGame() {
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'result'>('intro');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [stats, setStats] = useState<GameStats>(() => {
    const savedStats = localStorage.getItem('quizGameStats');
    if (savedStats) {
      return JSON.parse(savedStats);
    }
    return {
      gamesPlayed: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      bestScore: 0,
      fastestTime: 0
    };
  });
  const [totalTime, setTotalTime] = useState(0);
  const [categoryDistribution, setCategoryDistribution] = useState<Record<string, number>>({});
  const { toast } = useToast();

  // Shuffle and select random questions
  const prepareQuestions = () => {
    // Fisher-Yates shuffle algorithm
    const shuffledQuestions = [...quizQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions.slice(0, QUIZ_LENGTH));
    
    // Reset game state
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setTimeLeft(TIME_PER_QUESTION);
    setTotalTime(0);
    setGameState('playing');
  };

  // Track categories for the results page
  useEffect(() => {
    if (gameState === 'playing') {
      const distribution: Record<string, number> = {};
      questions.forEach(q => {
        distribution[q.category] = (distribution[q.category] || 0) + 1;
      });
      setCategoryDistribution(distribution);
    }
  }, [gameState, questions]);

  // Timer logic
  useEffect(() => {
    if (gameState !== 'playing' || isAnswered) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          // Auto-submit if time runs out
          handleAnswer(null);
          return 0;
        }
        return prev - 1;
      });
      
      // Increment total time
      setTotalTime(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [gameState, isAnswered, currentQuestionIndex]);
  
  // Save stats to localStorage
  useEffect(() => {
    localStorage.setItem('quizGameStats', JSON.stringify(stats));
  }, [stats]);

  // Handle answer selection
  const handleAnswer = (optionIndex: number | null) => {
    if (isAnswered) return;
    
    setSelectedOption(optionIndex);
    setIsAnswered(true);
    
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
      // Trigger confetti for correct answer
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      
      toast({
        title: "Correct!",
        description: currentQuestion.explanation,
        variant: "default",
      });
      
      // Update stats
      setStats(prev => ({
        ...prev,
        correctAnswers: prev.correctAnswers + 1
      }));
    } else {
      toast({
        title: "Incorrect!",
        description: currentQuestion.explanation,
        variant: "destructive",
      });
      
      // Update stats
      setStats(prev => ({
        ...prev,
        wrongAnswers: prev.wrongAnswers + 1
      }));
    }
    
    // Move to next question after a delay
    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setSelectedOption(null);
        setIsAnswered(false);
        setTimeLeft(TIME_PER_QUESTION);
      } else {
        // End game and update stats
        const finalScore = isCorrect ? score + 1 : score;
        
        setStats(prev => ({
          gamesPlayed: prev.gamesPlayed + 1,
          correctAnswers: prev.correctAnswers,
          wrongAnswers: prev.wrongAnswers,
          bestScore: Math.max(prev.bestScore, finalScore),
          fastestTime: prev.fastestTime === 0 
            ? totalTime 
            : Math.min(prev.fastestTime, totalTime)
        }));
        
        setGameState('result');
        
        // Trigger more confetti for game completion
        if (finalScore >= QUIZ_LENGTH * 0.7) {
          setTimeout(() => {
            confetti({
              particleCount: 200,
              spread: 160,
              origin: { y: 0.3 }
            });
          }, 500);
        }
      }
    }, 2000);
  };

  const restartGame = () => {
    prepareQuestions();
  };

  return (
    <Layout>
      <SEO title="Random Quiz Game" 
          description="Test your knowledge with our fun, random quiz game covering various topics from science to history, art to sports!" />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {gameState === 'intro' && (
          <Card className="animate-in fade-in-50 slide-in-from-bottom-6 duration-500">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Random Quiz Challenge</CardTitle>
              <CardDescription className="text-xl mt-4">
                Test your knowledge across various categories!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Science', 'History', 'Geography', 'Entertainment', 'Art', 'Sports', 'Literature', 'Technology'].map((category) => (
                  <div key={category} 
                    className="bg-muted rounded-lg p-3 text-sm font-medium flex items-center justify-center h-20"
                  >
                    {category}
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 bg-muted rounded-lg p-4">
                <h3 className="font-medium">How to Play:</h3>
                <ul className="text-sm text-muted-foreground text-left list-disc pl-5 space-y-1">
                  <li>{QUIZ_LENGTH} random questions from various categories</li>
                  <li>{TIME_PER_QUESTION} seconds per question</li>
                  <li>Try to answer correctly before time runs out!</li>
                  <li>Learn interesting facts along the way</li>
                </ul>
              </div>
              
              <div className="flex justify-center space-x-4">
                <Button size="lg" onClick={prepareQuestions} className="gap-2">
                  Start Quiz <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              
              {stats.gamesPlayed > 0 && (
                <div className="text-sm text-muted-foreground mt-4">
                  Your best score: {stats.bestScore}/{QUIZ_LENGTH}
                </div>
              )}
            </CardContent>
          </Card>
        )}
        
        {gameState === 'playing' && questions.length > 0 && (
          <div className="space-y-6 animate-in fade-in-50 duration-300">
            <div className="flex justify-between items-center">
              <div className="text-sm font-medium">
                Question {currentQuestionIndex + 1}/{questions.length}
              </div>
              <div className="flex items-center gap-1.5">
                <Timer className="h-4 w-4 text-amber-500" />
                <span className={cn(
                  "font-medium text-sm",
                  timeLeft < 5 && "text-red-500 animate-pulse"
                )}>
                  {timeLeft}s
                </span>
              </div>
              <div className="text-sm font-medium">
                Score: {score}/{questions.length}
              </div>
            </div>
            
            <Progress value={(currentQuestionIndex / questions.length) * 100} className="h-2" />
            
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-100 text-indigo-800">
                    {questions[currentQuestionIndex].category}
                  </span>
                  <span className={cn(
                    "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium",
                    questions[currentQuestionIndex].difficulty === 'easy' 
                      ? "bg-green-100 text-green-800"
                      : questions[currentQuestionIndex].difficulty === 'medium'
                      ? "bg-amber-100 text-amber-800"
                      : "bg-red-100 text-red-800"
                  )}>
                    {questions[currentQuestionIndex].difficulty.charAt(0).toUpperCase() + questions[currentQuestionIndex].difficulty.slice(1)}
                  </span>
                </div>
                <CardTitle className="text-xl font-semibold">
                  {questions[currentQuestionIndex].question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup 
                  value={selectedOption !== null ? String(selectedOption) : undefined} 
                  disabled={isAnswered}
                >
                  {questions[currentQuestionIndex].options.map((option, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "flex items-center space-x-2 rounded-lg border p-4 mb-3 transition-all",
                        selectedOption === index && "border-2",
                        isAnswered && index === questions[currentQuestionIndex].correctAnswer && "border-green-500 bg-green-50",
                        isAnswered && selectedOption === index && index !== questions[currentQuestionIndex].correctAnswer && "border-red-500 bg-red-50",
                        !isAnswered && "hover:border-indigo-300 cursor-pointer"
                      )}
                      onClick={() => !isAnswered && handleAnswer(index)}
                    >
                      <RadioGroupItem value={String(index)} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                        {option}
                      </Label>
                      {isAnswered && index === questions[currentQuestionIndex].correctAnswer && (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      )}
                      {isAnswered && selectedOption === index && index !== questions[currentQuestionIndex].correctAnswer && (
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>
          </div>
        )}
        
        {gameState === 'result' && (
          <Card className="animate-in fade-in-50 slide-in-from-bottom-6 duration-500">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Quiz Completed!</CardTitle>
              <CardDescription>
                You scored {score} out of {questions.length} questions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center justify-center p-6 bg-muted rounded-lg">
                <Trophy className={cn(
                  "h-12 w-12 mb-3",
                  score >= questions.length * 0.8 ? "text-yellow-500" :
                  score >= questions.length * 0.6 ? "text-slate-400" :
                  "text-amber-700"
                )} />
                <h3 className="text-xl font-bold mb-1">
                  {score === questions.length ? "Perfect Score!" :
                   score >= questions.length * 0.8 ? "Excellent!" :
                   score >= questions.length * 0.6 ? "Well Done!" :
                   score >= questions.length * 0.4 ? "Good Effort!" :
                   "Keep Practicing!"}
                </h3>
                <p className="text-muted-foreground text-center">
                  {score === questions.length ? "Wow! You're a quiz master!" :
                   score >= questions.length * 0.8 ? "You really know your stuff!" :
                   score >= questions.length * 0.6 ? "That's a solid performance!" :
                   score >= questions.length * 0.4 ? "You're on the right track!" :
                   "Don't worry, practice makes perfect!"}
                </p>
              </div>
              
              <Separator />
              
              <div className="space-y-4">
                <h3 className="font-medium">Categories Covered:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {Object.entries(categoryDistribution).map(([category, count]) => (
                    <div key={category} className="flex items-center justify-between bg-muted/50 rounded-lg p-2 text-sm">
                      <span>{category}</span>
                      <span className="font-mono bg-background rounded-full px-2 py-0.5 text-xs">
                        {count} {count === 1 ? 'question' : 'questions'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="text-sm text-muted-foreground">Games Played</div>
                  <div className="text-2xl font-bold">{stats.gamesPlayed}</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="text-sm text-muted-foreground">Best Score</div>
                  <div className="text-2xl font-bold">{stats.bestScore}/{QUIZ_LENGTH}</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="text-sm text-muted-foreground">Correct Answers</div>
                  <div className="text-2xl font-bold text-green-600">{stats.correctAnswers}</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="text-sm text-muted-foreground">Wrong Answers</div>
                  <div className="text-2xl font-bold text-red-600">{stats.wrongAnswers}</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3">
              <Button onClick={restartGame} className="w-full sm:w-auto gap-2">
                <RotateCcw className="h-4 w-4" /> Play Again
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
      
      <Helmet>
        <title>Random Quiz Game | Test Your Knowledge</title>
        <meta 
          name="description" 
          content="Challenge yourself with our fun random quiz game! Test your knowledge across multiple categories including science, history, art, and more." 
        />
      </Helmet>
    </Layout>
  );
}