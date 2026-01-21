export interface Lesson {
  id: string
  title: string
  content: string
  objectives?: string[]
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
}

export interface Module {
  id: string
  title: string
  description: string
  duration: string
  order: number
  lessons: Lesson[]
  quiz: QuizQuestion[]
}

export const modules: Module[] = [
  {
    id: 'intro-to-ai',
    title: 'Introduction to AI & Its Impact',
    description: 'Understand the fundamentals of artificial intelligence, machine learning concepts, and real-world applications in healthcare and autonomous vehicles.',
    duration: '45 min',
    order: 1,
    lessons: [
      {
        id: 'understanding-ai',
        title: 'Understanding AI',
        objectives: [
          'Define artificial intelligence and its core concepts',
          'Understand the history and evolution of AI',
          'Recognize AI core capabilities and their applications',
          'Learn key milestones in AI development',
        ],
        content: `
## What is Artificial Intelligence?

:::key-concept[Definition]
AI is the simulation of human intelligence in machines, enabling them to perform tasks such as visual perception, speech recognition, decision-making, and language translation. These capabilities are powered by advanced algorithms, machine learning, and deep learning.
:::

## Core Capabilities of AI

:::card-grid
:::card[eye][Visual Perception]
AI can analyze visual data for tasks like object detection, facial recognition, and image classification.
:::card[microphone][Speech Recognition]
AI systems can understand and transcribe human speech, enabling voice-controlled applications like virtual assistants.
:::card[chart][Decision-Making]
AI can make informed decisions by analyzing data, identifying patterns, and predicting real-time outcomes.
:::card[chat][Natural Language Processing]
AI enables machines to understand, generate, and respond in human-like language, facilitating communication through chatbots.
:::card[robot][Autonomous Interaction]
AI can interact with and navigate its environment autonomously, as seen in robotics and self-driving cars.
:::end-grid

## Basic Concepts of AI

:::card-grid
:::card[brain][Artificial Intelligence]
Creating machines and software capable of performing tasks that typically require human intelligence, such as reasoning, learning, and problem-solving.
:::card[database][Machine Learning]
A subset of AI that focuses on building algorithms allowing machines to learn from data and improve over time without explicit programming.
:::card[cog][Deep Learning]
A subset of ML using neural networks with multiple layers to learn from large datasets, enabling complex tasks like image recognition.
:::card[chat][Natural Language Processing]
A branch of AI that enables computers to understand, interpret, and generate human-like language for chatbots and voice assistants.
:::end-grid

## History & Evolution of AI

:::timeline
:::event[1940s-1950s][Early Foundations]
AI concepts emerged with pioneers like Alan Turing and John McCarthy, laying the groundwork with ideas like the Turing Test.
:::event[1956][The Birth of AI]
AI was officially founded during the Dartmouth Conference, where early research focused on symbolic reasoning and logic.
:::event[1970s-1980s][The AI Winters]
Progress slowed due to computational limitations, funding cuts, and the inability to meet ambitious AI goals.
:::event[1990s-2000s][Rise of Machine Learning]
Advances in algorithms, computational power, and Big Data led to a resurgence in AI development.
:::event[2010s][Deep Learning Era]
Breakthroughs in deep learning enabled AI to perform complex tasks like image and speech recognition.
:::event[2020s][AI Everywhere]
AI is now deeply integrated into industries such as healthcare, finance, and autonomous systems.
:::end-timeline

## Key Milestones in AI

| Year | Milestone |
|------|-----------|
| 1950s | The Turing Test was introduced; early AI programs like the Logic Theorist developed |
| 1980s | Expert systems and neural networks gained prominence |
| 1997 | IBM's Deep Blue defeated world chess champion Garry Kasparov |
| 2012 | Deep Learning revolutionized AI with breakthroughs in image recognition (AlexNet) |
| 2016 | AlphaGo defeated world champion Go player Lee Sedol |
| 2020s | AI models like GPT-3 and GPT-4 pushed boundaries in natural language understanding |

## AI's Impact & Influence

:::feature-list
:::feature[Learning Abilities]
Through machine learning and deep learning, AI can learn from vast datasets, improve its performance over time, and adapt to new situations.
:::feature[Industry Revolution]
AI is revolutionizing healthcare (diagnostics), finance (fraud detection), and manufacturing (automation), leading to increased efficiency.
:::feature[Modern Technology]
AI drives advancements in automation, data analysis, and real-time decision-making—from smart devices to personal assistants.
:::feature[Enhanced Productivity]
AI automates routine tasks, optimizes processes, and enables faster data-driven decision-making.
:::feature[Societal Impact]
AI reshapes how we work, communicate, and interact with technology, solving complex global challenges.
:::end-list
        `,
      },
      {
        id: 'ai-everyday-life',
        title: 'AI in Everyday Life',
        objectives: [
          'Identify AI applications in daily activities',
          'Understand how AI enhances user experiences',
          'Recognize the ubiquity of AI technology across sectors',
        ],
        content: `
## AI All Around Us

:::info
AI has integrated into many areas of life, improving ease, efficiency, and decision-making. From clever personal assistants to advanced data analysis systems, AI is reshaping how we interact with technology, enhancing personalization, efficiency, and convenience across diverse sectors.
:::

## AI Applications by Category

| Category | Description | Examples | Impact |
|----------|-------------|----------|--------|
| **Virtual Assistants** | AI-powered digital assistants that respond to voice commands | Siri, Alexa, Google Assistant | Hands-free assistance, smart home automation |
| **AI in Healthcare** | AI helps in medical diagnostics and health monitoring | MRI analysis, Smartwatches, AI chatbots | Early disease detection, personalized healthcare |
| **Recommendation Algorithms** | AI suggests personalized content based on behavior | Netflix, YouTube, Spotify, TikTok | Enhanced user experience, better content discovery |
| **Smart Homes & IoT** | AI-powered automation in household devices | Nest, Ring, Roomba | Convenience, energy efficiency, improved security |

## Your Daily AI Interactions

:::card-grid
:::card[star][Morning Routine]
Smart alarms learn your sleep patterns. Weather apps provide AI-powered forecasting. News feeds personalize content based on your interests.
:::card[chat][Communication]
Email filtering detects spam. Smart reply suggests responses. Translation services provide real-time language conversion.
:::card[eye][Entertainment]
Netflix and Spotify analyze your habits. Gaming adjusts difficulty dynamically. Social media curates content and suggests friends.
:::card[cart][Shopping]
Product recommendations based on browsing history. Price predictions for optimal purchase timing. Visual search finds products by image.
:::end-grid

## Transportation & Navigation

:::card-grid
:::card[car][Navigation Apps]
Traffic prediction and route optimization help you get to your destination faster with real-time updates.
:::card[robot][Ride-Sharing]
Matching algorithms pair you with drivers. Surge pricing adjusts to demand dynamically.
:::card[cog][Autonomous Vehicles]
Self-driving technology uses AI for perception, decision-making, and vehicle control.
:::end-grid

## Smart Home Automation

:::feature-list
:::feature[Smart Thermostats]
Learn your temperature preferences over time and automatically optimize energy usage to reduce bills.
:::feature[Voice Assistants]
Control lights, appliances, and entertainment systems with natural language voice commands.
:::feature[Security Systems]
Facial recognition identifies family members. Anomaly detection alerts you to unusual activity.
:::feature[Robot Vacuums]
Map your home and clean autonomously, avoiding obstacles and returning to charge when needed.
:::end-list

:::tip
The next time you use your phone, think about how many AI systems are working behind the scenes—from autocorrect to photo organization to battery optimization!
:::
        `,
      },
      {
        id: 'intro-machine-learning',
        title: 'Introduction to Machine Learning',
        objectives: [
          'Understand the fundamentals of machine learning',
          'Differentiate between supervised and unsupervised learning',
          'Learn the step-by-step process for each learning type',
          'Recognize when to use each approach in AI projects',
        ],
        content: `
## What is Machine Learning?

:::key-concept[Definition]
Machine Learning (ML) is a subset of AI in which algorithms are used to identify patterns in data and make decisions or predictions based on that data. Models learn from experience without being explicitly programmed.
:::

## Two Main Approaches

:::card-grid
:::card[book][Supervised Learning]
Models are trained using labeled data (data with known outcomes). The algorithm learns from examples to predict outcomes or classify new data.
:::card[brain][Unsupervised Learning]
Models work with unlabeled data to find hidden patterns or groupings. No predefined outcomes are provided to the algorithm.
:::end-grid

## Supervised Learning

:::info
**Purpose**: To predict outcomes or classify data.

**Examples**: Predicting house prices, classifying emails as spam, image recognition.

**Common Algorithms**: Linear regression, decision trees, support vector machines, neural networks.
:::

### Supervised Learning Process

:::timeline
:::event[Step 1][Input Raw Data]
Begin with raw data, such as images, text, or numbers (e.g., images of animals).
:::event[Step 2][Labeled Data]
Each piece of data is associated with a correct label (e.g., "elephant," "camel," or "cow").
:::event[Step 3][Train/Test Split]
Divide data into training set (80%) and test set (20%) for evaluation.
:::event[Step 4][Algorithm Selection]
Choose an algorithm like Neural Networks, Decision Trees, or SVM.
:::event[Step 5][Training]
Algorithm learns to associate features with labels, adjusting parameters to minimize errors.
:::event[Step 6][Prediction]
Trained model makes predictions on new, unlabeled data.
:::end-timeline

## Unsupervised Learning

:::info
**Purpose**: To explore data, find clusters, or reduce data dimensions.

**Examples**: Customer segmentation, anomaly detection, organizing unlabeled data.

**Common Algorithms**: K-means clustering, hierarchical clustering, PCA, t-SNE.
:::

### Unsupervised Learning Process

:::timeline
:::event[Step 1][Input Raw Data]
Start with unlabeled data—no predefined categories or labels provided.
:::event[Step 2][Pattern Discovery]
Algorithm identifies patterns and relationships to uncover inherent structure.
:::event[Step 3][Algorithm Selection]
Choose clustering (k-means), dimensionality reduction (PCA), or anomaly detection.
:::event[Step 4][Processing]
Algorithm discovers patterns, relationships, or natural groupings in the data.
:::event[Step 5][Output]
Results reveal clusters, simplified representations, or unusual data points.
:::end-timeline

## Key Differences

| Aspect | Supervised Learning | Unsupervised Learning |
|--------|--------------------|-----------------------|
| **Data** | Uses labeled data (known outcomes) | Uses unlabeled data (no labels) |
| **Output** | Predicts specific outcomes | Identifies hidden patterns |
| **Use Cases** | Spam detection, price prediction | Customer segmentation, anomaly detection |

## When to Use Each Approach

:::card-grid
:::card[check][Use Supervised Learning]
When you have labeled data and need to predict or classify new data. Best for making accurate predictions based on historical examples.
:::card[brain][Use Unsupervised Learning]
When you have unlabeled data and want to discover hidden structures. Best for exploring data and finding meaningful groupings.
:::end-grid

:::tip
Machine learning plays a critical role in improving decision-making by learning from data. Supervised learning focuses on specific predictions, while unsupervised learning uncovers hidden patterns.
:::
        `,
      },
      {
        id: 'ai-healthcare-usecase',
        title: 'Use-Case: AI in Healthcare',
        objectives: [
          'Explore practical AI applications in healthcare',
          'Understand predictive analytics, drug discovery, and medical imaging',
          'Consider ethical implications and challenges',
        ],
        content: `
## AI Transforming Healthcare

:::key-concept[Healthcare AI Impact]
Healthcare is one of the most promising fields for AI application. Machine learning improves patient care, reduces costs, enhances diagnosis accuracy, and accelerates the development of treatments.
:::

## Key Healthcare AI Applications

:::card-grid
:::card[chart][Predictive Analytics]
ML algorithms analyze electronic health records (EHRs) to predict patient outcomes, personalize treatments, and identify at-risk patients for early intervention.
:::card[cog][Drug Discovery]
ML accelerates drug discovery by predicting success rates, analyzing molecular structures, and identifying potential drug candidates faster.
:::card[eye][Medical Imaging]
Deep learning algorithms interpret X-rays, MRIs, and CT scans to detect anomalies or diseases like early-stage cancer with high accuracy.
:::end-grid

## Diagnostic Applications

:::card-grid
:::card[eye][Medical Imaging]
AI analyzes X-rays, MRIs, and CT scans. Detects abnormalities with high accuracy. Reduces radiologist workload and wait times.
:::card[brain][Pathology]
Automated analysis of tissue samples. Cancer cell detection with precision. Faster and more consistent results.
:::card[heart][Diagnostics]
Pattern recognition in patient data. Early disease detection. Risk assessment and monitoring.
:::end-grid

## Treatment and Care

:::feature-list
:::feature[Drug Discovery]
AI accelerates the drug development process, identifies potential compounds faster, and reduces research costs significantly.
:::feature[Personalized Medicine]
Treatment plans tailored to individual patients, genetic analysis for optimal drug selection, and predicting treatment outcomes.
:::feature[Robotic Surgery]
Enhanced precision in surgical procedures, minimally invasive techniques, and faster recovery times for patients.
:::feature[Mental Health]
AI-powered chatbots for initial assessments, mood tracking, and therapeutic support between appointments.
:::end-list

## Administrative Applications

:::card-grid
:::card[cog][Scheduling]
Optimizing appointment systems to reduce wait times and maximize provider efficiency.
:::card[book][Documentation]
Automated medical records and transcription to reduce administrative burden on healthcare workers.
:::card[database][Resource Management]
Predicting equipment needs, inventory management, and optimizing hospital operations.
:::end-grid

## Challenges and Considerations

:::warning
Healthcare AI comes with significant challenges that must be addressed:
- **Data Privacy**: Protecting sensitive patient information and ensuring HIPAA compliance
- **Accuracy & Liability**: Determining responsibility when AI makes errors
- **Access & Equity**: Ensuring AI healthcare benefits are available to all populations
- **Bias**: Addressing potential biases in AI training data and algorithms
:::

## The Future of AI in Healthcare

:::timeline
:::event[Now][Current Applications]
Medical imaging analysis, drug discovery acceleration, and administrative automation.
:::event[Near Future][Emerging Capabilities]
Early disease detection before symptoms appear, continuous health monitoring through wearables.
:::event[Future][Advanced Integration]
AI-powered mental health support, global health surveillance systems, and fully personalized medicine.
:::end-timeline

:::tip
AI in healthcare is most effective when it augments human expertise rather than replacing it. The best outcomes come from combining AI capabilities with the judgment and empathy of healthcare professionals.
:::
        `,
      },
      {
        id: 'ai-self-driving-cars',
        title: 'Case Study: AI in Self-Driving Cars',
        objectives: [
          'Understand how AI enables autonomous vehicles',
          'Learn about sensor fusion and AI decision-making in AVs',
          'Recognize the key takeaways from AV technology development',
        ],
        content: `
## AI in Self-Driving Cars

:::key-concept[Autonomous Vehicles]
The development of Autonomous Vehicles (AVs) represents a breakthrough in transportation, combining machine learning, deep learning, and sensor integration to allow vehicles to navigate without human intervention.
:::

## Case Study Overview

:::info
**Organizations**: Tesla, Waymo, General Motors, and other AV industry leaders

**Target Industry**: Automotive & Transportation

**Goal**: Create vehicles that operate independently, enhance safety, reduce human error, and revolutionize transportation
:::

## The Challenge

:::warning
The automotive industry faced significant challenges in creating vehicles that could operate independently:
- **Data Processing**: Handling massive amounts of sensor data in real-time
- **Sensor Integration**: Combining multiple data sources for accurate environmental awareness
- **Real-time Decision-Making**: Making safe split-second decisions in complex traffic scenarios
:::

## The Solution: AI-Powered Technology

:::card-grid
:::card[eye][Sensor Fusion]
Combining data from multiple sensors (LiDAR, cameras, radar) to create a comprehensive understanding of the vehicle's surroundings.
:::card[database][Data Analysis]
Real-time processing of massive sensor data using advanced algorithms to detect objects, predict movement, and interpret traffic conditions.
:::card[brain][AI Decision-Making]
ML and deep learning systems analyze sensor data, learn from experience, and make real-time driving decisions.
:::end-grid

## How AV AI Works

:::timeline
:::event[Step 1][Perception]
Sensors collect data about the environment—other vehicles, pedestrians, road signs, lane markings, and obstacles.
:::event[Step 2][Sensor Fusion]
AI combines data from cameras, LiDAR, and radar to build a complete 3D model of the surroundings.
:::event[Step 3][Prediction]
Machine learning predicts how other objects will move in the next few seconds.
:::event[Step 4][Path Planning]
AI calculates the optimal route considering safety, traffic rules, and efficiency.
:::event[Step 5][Control]
The system executes decisions by controlling steering, acceleration, and braking.
:::end-timeline

## Core AI Components

:::feature-list
:::feature[Machine Learning & Deep Learning]
Algorithms trained on vast driving datasets to recognize patterns, predict outcomes, and adapt to new situations on the road.
:::feature[Path Planning Algorithms]
AI computes optimal routes considering vehicle location, destination, environmental data, and safety constraints.
:::feature[Control Systems]
Execute AI decisions by precisely controlling steering, acceleration, and braking while prioritizing safety.
:::feature[Computer Vision]
Interprets camera feeds to identify lane markings, traffic signs, pedestrians, and other vehicles.
:::end-list

## Outcomes & Benefits

:::card-grid
:::card[shield][Improved Road Safety]
AVs reduce human error—a leading cause of accidents—leading to fewer traffic collisions and safer driving conditions.
:::card[car][Efficient Traffic Flow]
AVs optimize movements and communicate with other vehicles to reduce congestion and improve traffic efficiency.
:::card[star][Enhanced Convenience]
Hands-free commuting allows drivers to focus on other activities or relax during travel.
:::end-grid

## Key Takeaways

:::tip
**1. Sensor Fusion & Data Processing**: Multiple sensors and advanced processing create accurate environmental awareness, making AVs reliable in challenging conditions.

**2. AI-Powered Decision-Making**: Machine learning enables safe, real-time decisions based on constantly evolving road situations.

**3. Path Planning & Control**: AI algorithms determine optimal paths and execute driving decisions with precision, crucial for safety and functionality.
:::
        `,
      },
    ],
    quiz: [
      {
        id: 'q1-1',
        question: 'When was AI officially founded as a field of study?',
        options: [
          '1940s during World War II',
          '1956 at the Dartmouth Conference',
          '1997 when Deep Blue defeated Kasparov',
          '2012 with the AlexNet breakthrough',
        ],
        correctAnswer: 1,
      },
      {
        id: 'q1-2',
        question: 'Which type of machine learning uses labeled data for training?',
        options: [
          'Unsupervised Learning',
          'Reinforcement Learning',
          'Supervised Learning',
          'Clustering',
        ],
        correctAnswer: 2,
      },
      {
        id: 'q1-3',
        question: 'What is the primary purpose of unsupervised learning?',
        options: [
          'To predict specific outcomes using labeled data',
          'To find hidden patterns or groupings in unlabeled data',
          'To learn through rewards and penalties',
          'To replace supervised learning entirely',
        ],
        correctAnswer: 1,
      },
      {
        id: 'q1-4',
        question: 'In healthcare AI, what does predictive analytics using EHRs help achieve?',
        options: [
          'Replace doctors entirely',
          'Predict patient outcomes and identify at-risk patients for early intervention',
          'Eliminate the need for medical records',
          'Reduce the number of patients',
        ],
        correctAnswer: 1,
      },
      {
        id: 'q1-5',
        question: 'What is a key component of AI that involves understanding human language?',
        options: [
          'Computer Vision',
          'Natural Language Processing',
          'Robotics',
          'Linear Regression',
        ],
        correctAnswer: 1,
      },
      {
        id: 'q1-6',
        question: 'In self-driving cars, what is "sensor fusion"?',
        options: [
          'Combining multiple sensors into one physical device',
          'Combining data from multiple sensors (LiDAR, cameras, radar) to understand the environment',
          'Fusing the car with the road',
          'A technique for reducing sensor costs',
        ],
        correctAnswer: 1,
      },
      {
        id: 'q1-7',
        question: 'Which algorithm is commonly used for unsupervised learning clustering tasks?',
        options: [
          'Linear Regression',
          'Logistic Regression',
          'K-means Clustering',
          'Decision Trees for classification',
        ],
        correctAnswer: 2,
      },
      {
        id: 'q1-8',
        question: 'What was a key AI milestone in 2016?',
        options: [
          'The Turing Test was introduced',
          'IBM Deep Blue defeated Kasparov',
          'AlphaGo defeated world champion Go player Lee Sedol',
          'The first AI winter began',
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering',
    description: 'Master the art of crafting effective prompts to get the best results from AI models.',
    duration: '40 min',
    order: 2,
    lessons: [
      {
        id: 'defining-prompt-engineering',
        title: 'Defining Prompt Engineering',
        objectives: [
          'Understand what prompt engineering is',
          'Learn why prompts matter for AI output',
          'Recognize the role of context in prompting',
        ],
        content: `
## What is Prompt Engineering?

Prompt engineering is the practice of designing and refining inputs (prompts) to AI systems to achieve desired outputs. It's both an art and a science that requires understanding how AI models process and respond to information.

### Why Prompts Matter

The quality of AI output is directly related to the quality of the input. A well-crafted prompt can:
- Produce more accurate responses
- Generate more relevant content
- Reduce misunderstandings
- Save time and resources

### The Anatomy of a Prompt

**Components of Effective Prompts:**

1. **Context**: Background information the AI needs
2. **Instruction**: Clear directive of what you want
3. **Examples**: Sample inputs and outputs (few-shot learning)
4. **Constraints**: Limitations or specifications
5. **Format**: How you want the output structured

### Prompt vs. Traditional Programming

| Traditional Programming | Prompt Engineering |
|------------------------|-------------------|
| Explicit instructions | Natural language |
| Deterministic output | Probabilistic output |
| Code syntax | Conversational input |
| Fixed behavior | Adaptable responses |

### The Iterative Process

Prompt engineering is rarely perfect on the first try:

1. **Draft** initial prompt
2. **Test** with the AI model
3. **Analyze** the output
4. **Refine** the prompt
5. **Repeat** until satisfied

### Key Principles

- Be specific and clear
- Provide relevant context
- Use examples when helpful
- Iterate and improve
- Understand model capabilities
        `,
      },
      {
        id: 'well-crafted-prompts',
        title: 'Enhancement through Well-Crafted Prompts',
        objectives: [
          'Learn techniques for writing better prompts',
          'Understand prompt patterns and templates',
          'Practice improving prompts systematically',
        ],
        content: `
## Crafting Effective Prompts

The difference between mediocre and excellent AI outputs often comes down to how well the prompt is constructed. Let's explore techniques for enhancement.

### Prompt Patterns

**The Persona Pattern**
\`\`\`
Act as a [role/expert]. [Your task/question].
\`\`\`
Example: "Act as a senior software engineer. Review this code for security vulnerabilities."

**The Template Pattern**
\`\`\`
Given [context], please [action] in the format of [structure].
\`\`\`

**The Few-Shot Pattern**
\`\`\`
Here are some examples:
Input: [example1] -> Output: [result1]
Input: [example2] -> Output: [result2]
Now, Input: [your input] -> Output:
\`\`\`

### Techniques for Better Prompts

**1. Be Specific**
- Bad: "Write about dogs"
- Good: "Write a 200-word informative paragraph about the health benefits of owning a dog, targeting first-time pet owners"

**2. Provide Context**
- Include relevant background information
- Specify your audience
- Explain the purpose

**3. Use Clear Structure**
- Break complex tasks into steps
- Use numbered lists
- Specify format requirements

**4. Set Constraints**
- Length requirements
- Style guidelines
- Things to avoid

### Common Improvements

| Weak Prompt | Strong Prompt |
|-------------|---------------|
| "Summarize this" | "Provide a 3-bullet summary of the key points for executives" |
| "Fix the code" | "Debug this Python function and explain what was wrong" |
| "Make it better" | "Improve the clarity and engagement of this marketing copy while maintaining the professional tone" |

### Advanced Techniques

- **Chain of Thought**: Ask the AI to show its reasoning
- **Self-Consistency**: Generate multiple responses and compare
- **Constitutional AI**: Include ethical guidelines in prompts
        `,
      },
      {
        id: 'exploring-gpt4',
        title: 'Exploring GPT-4',
        objectives: [
          'Understand GPT-4 capabilities',
          'Learn optimal prompting strategies for GPT-4',
          'Recognize limitations and best practices',
        ],
        content: `
## Understanding GPT-4

GPT-4 (Generative Pre-trained Transformer 4) represents a significant advancement in large language models. Understanding its capabilities helps you craft better prompts.

### Key Capabilities

**Text Generation**
- Long-form content creation
- Multiple writing styles
- Various formats (essays, code, poetry, etc.)

**Analysis and Reasoning**
- Complex problem solving
- Logical deduction
- Pattern recognition

**Code Understanding**
- Multiple programming languages
- Debugging assistance
- Code explanation

**Multimodal Processing** (GPT-4V)
- Image understanding
- Document analysis
- Visual reasoning

### What GPT-4 Does Well

1. **Following complex instructions**
2. **Maintaining context over long conversations**
3. **Creative writing and brainstorming**
4. **Explaining complex topics simply**
5. **Code generation and debugging**

### Current Limitations

- Knowledge cutoff date
- Cannot access real-time information
- May produce plausible-sounding but incorrect information
- Limited mathematical precision
- Cannot execute code directly

### Prompting Strategies for GPT-4

**System Prompts**
Set the overall behavior and role:
\`\`\`
You are a helpful assistant that specializes in data analysis. Provide concise, accurate responses with relevant examples.
\`\`\`

**Temperature Settings**
- Lower (0-0.3): More focused, deterministic
- Medium (0.4-0.7): Balanced creativity
- Higher (0.8-1.0): More creative, varied

### Best Practices

- Start with clear objectives
- Be explicit about format
- Use examples for complex tasks
- Iterate and refine
- Verify important information
        `,
      },
      {
        id: 'prompting-across-sectors',
        title: 'Use-case: Prompting across Sectors',
        objectives: [
          'Apply prompt engineering to different industries',
          'Learn sector-specific prompting techniques',
          'Understand real-world applications',
        ],
        content: `
## Prompt Engineering Across Industries

Different sectors have unique requirements for AI prompting. Let's explore how prompt engineering applies across various fields.

### Healthcare

**Clinical Documentation**
\`\`\`
As a medical transcriptionist, convert the following doctor's notes into a structured clinical report with sections for: Chief Complaint, History of Present Illness, Physical Examination, and Assessment/Plan.
\`\`\`

**Patient Communication**
\`\`\`
Explain the following medical procedure in patient-friendly terms, avoiding jargon, for a patient with no medical background:
\`\`\`

### Finance

**Risk Analysis**
\`\`\`
Analyze the following financial data and identify potential risks. Present findings in a table with Risk Factor, Likelihood, Impact, and Mitigation Strategy columns.
\`\`\`

**Report Generation**
\`\`\`
Create an executive summary of this quarterly financial report, highlighting key metrics, notable changes, and recommendations for stakeholders.
\`\`\`

### Marketing

**Content Creation**
\`\`\`
Write a social media post for [platform] promoting [product/service]. Target audience: [demographic]. Tone: [professional/casual/urgent]. Include a call-to-action.
\`\`\`

**Customer Analysis**
\`\`\`
Analyze this customer feedback data and categorize sentiments. Identify the top 3 pain points and suggest improvements.
\`\`\`

### Education

**Lesson Planning**
\`\`\`
Create a lesson plan for teaching [topic] to [grade level] students. Include learning objectives, activities, assessment methods, and differentiation strategies.
\`\`\`

**Student Feedback**
\`\`\`
Provide constructive feedback on this student essay. Highlight strengths, areas for improvement, and specific suggestions while maintaining an encouraging tone.
\`\`\`

### Legal

**Contract Review**
\`\`\`
Review this contract clause and identify potential issues or ambiguities. Suggest clearer language alternatives.
\`\`\`

**Research Summary**
\`\`\`
Summarize the key legal precedents related to [topic] in plain language suitable for a non-legal audience.
\`\`\`

### Key Takeaways

- Adapt prompts to sector-specific terminology
- Include relevant context and constraints
- Specify compliance requirements where applicable
- Use domain-appropriate examples
        `,
      },
    ],
    quiz: [
      {
        id: 'q2-1',
        question: 'What are the main components of an effective prompt?',
        options: [
          'Only the question you want answered',
          'Context, instruction, examples, constraints, and format',
          'Just keywords related to your topic',
          'A single sentence with no additional information',
        ],
        correctAnswer: 1,
      },
      {
        id: 'q2-2',
        question: 'Which prompt pattern involves providing the AI with a role to assume?',
        options: [
          'The Template Pattern',
          'The Few-Shot Pattern',
          'The Persona Pattern',
          'The Chain Pattern',
        ],
        correctAnswer: 2,
      },
      {
        id: 'q2-3',
        question: 'What is a limitation of GPT-4?',
        options: [
          'Cannot understand multiple languages',
          'Cannot generate any code',
          'Has a knowledge cutoff date and cannot access real-time information',
          'Can only respond with one sentence at a time',
        ],
        correctAnswer: 2,
      },
      {
        id: 'q2-4',
        question: 'When would you use a lower temperature setting (0-0.3) with an AI model?',
        options: [
          'When you want highly creative and varied responses',
          'When you need focused, deterministic responses',
          'When the AI should guess randomly',
          'Temperature settings have no effect on output',
        ],
        correctAnswer: 1,
      },
      {
        id: 'q2-5',
        question: 'Which is an example of improving a weak prompt?',
        options: [
          'Changing "Write about cats" to "Write something"',
          'Removing all context from the prompt',
          'Changing "Summarize this" to "Provide a 3-bullet summary of key points for executives"',
          'Making the prompt longer without adding specific details',
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: 'ai-business',
    title: 'AI in Business & Industry',
    description: 'Learn how organizations leverage AI for competitive advantage and operational excellence.',
    duration: '40 min',
    order: 3,
    lessons: [
      {
        id: 'crafting-ai-strategies',
        title: 'Crafting AI Strategies',
        objectives: [
          'Understand components of an AI strategy',
          'Learn to align AI with business goals',
          'Identify key success factors for AI adoption',
        ],
        content: `
## Building an AI Strategy

Successful AI implementation requires more than just technology—it requires a comprehensive strategy that aligns with business objectives.

### The AI Strategy Framework

**1. Vision and Goals**
- Define what AI success looks like
- Align with overall business strategy
- Set measurable objectives

**2. Use Case Identification**
- Prioritize high-impact opportunities
- Consider feasibility and resources
- Start with pilot projects

**3. Data Strategy**
- Assess data availability and quality
- Plan data infrastructure
- Ensure data governance

**4. Technology Stack**
- Choose appropriate tools and platforms
- Consider build vs. buy decisions
- Plan for scalability

**5. Talent and Skills**
- Identify skill gaps
- Training and upskilling programs
- Hiring strategy

### Prioritizing AI Initiatives

Evaluate opportunities using:
- **Impact**: Business value potential
- **Feasibility**: Technical complexity
- **Data**: Availability and quality
- **Resources**: Time and budget required

### Change Management

AI adoption requires organizational change:
- Executive sponsorship
- Clear communication
- Training programs
- Culture of experimentation

### Common Pitfalls

- Starting too big
- Ignoring data quality
- Lack of clear objectives
- Insufficient change management
- Over-reliance on technology alone

### Success Metrics

- ROI and cost savings
- Productivity improvements
- Customer satisfaction
- Time to market
- Error reduction
        `,
      },
      {
        id: 'key-ai-tools',
        title: 'Key AI Tools for Business',
        objectives: [
          'Explore popular AI tools and platforms',
          'Understand tool selection criteria',
          'Learn integration best practices',
        ],
        content: `
## Essential AI Tools for Business

The AI tools landscape is vast and rapidly evolving. Understanding the key categories helps organizations make informed decisions.

### Categories of AI Tools

**1. Machine Learning Platforms**
- Cloud-based ML services
- AutoML tools
- Custom model development

**2. Natural Language Processing**
- Chatbots and virtual assistants
- Document processing
- Sentiment analysis

**3. Computer Vision**
- Image recognition
- Video analytics
- Document scanning

**4. Business Intelligence**
- Predictive analytics
- Data visualization
- Automated reporting

### Popular AI Platforms

**Cloud Providers**
- AWS AI/ML Services
- Google Cloud AI
- Microsoft Azure AI
- IBM Watson

**Specialized Tools**
- OpenAI API (GPT models)
- Salesforce Einstein
- HubSpot AI features
- Tableau Analytics

### Tool Selection Criteria

| Criteria | Considerations |
|----------|----------------|
| Scalability | Can it grow with your needs? |
| Integration | Works with existing systems? |
| Ease of use | Technical requirements? |
| Cost | Total cost of ownership? |
| Support | Vendor reliability? |
| Security | Compliance requirements? |

### Integration Best Practices

1. **Start with APIs**
   - Lower barrier to entry
   - Faster implementation
   - Easier to swap providers

2. **Plan for Scale**
   - Consider future needs
   - Monitor usage and costs
   - Build flexible architecture

3. **Ensure Security**
   - Data encryption
   - Access controls
   - Compliance monitoring

### Build vs. Buy Decision

**Buy (SaaS/API):**
- Faster deployment
- Lower initial investment
- Vendor maintains updates

**Build (Custom):**
- More control
- Competitive advantage
- Higher initial investment
        `,
      },
      {
        id: 'power-of-gan',
        title: 'Power of GAN AI',
        objectives: [
          'Understand Generative Adversarial Networks',
          'Explore business applications of GANs',
          'Recognize opportunities and challenges',
        ],
        content: `
## Generative Adversarial Networks (GANs)

GANs represent one of the most exciting developments in AI, enabling machines to generate new, original content.

### How GANs Work

GANs consist of two neural networks competing against each other:

**Generator**
- Creates new data (images, text, etc.)
- Tries to produce realistic outputs
- Learns to improve from feedback

**Discriminator**
- Evaluates generated content
- Distinguishes real from fake
- Provides feedback to the generator

### The Training Process

1. Generator creates fake data
2. Discriminator evaluates real vs. fake
3. Both networks improve over time
4. Eventually produces highly realistic outputs

### Business Applications

**Marketing and Creative**
- Product image generation
- Ad creative variations
- Virtual try-on experiences
- Personalized content

**Product Development**
- Design prototyping
- Style transfer
- Data augmentation for training

**Healthcare**
- Medical image synthesis
- Drug molecule generation
- Privacy-preserving data sharing

**Fashion and Retail**
- Virtual fashion design
- Personalized recommendations
- Inventory visualization

### Real-World Examples

- **NVIDIA**: Face generation and editing
- **Adobe**: Image manipulation tools
- **Fashion**: Virtual fitting rooms
- **Architecture**: Building design generation

### Challenges and Considerations

**Technical Challenges**
- Training instability
- Mode collapse
- Computational requirements

**Ethical Concerns**
- Deepfakes and misinformation
- Copyright questions
- Authenticity verification

### The Future of GANs

- Higher resolution outputs
- Better control over generation
- More efficient training
- Broader accessibility
        `,
      },
      {
        id: 'ai-business-growth',
        title: 'Case Studies: AI Business Growth',
        objectives: [
          'Analyze successful AI implementations',
          'Extract key success factors',
          'Apply learnings to your context',
        ],
        content: `
## AI Success Stories

Learning from real-world AI implementations provides valuable insights for your own AI journey.

### Case Study 1: Netflix Recommendation Engine

**Challenge**
- Vast content library
- Diverse user preferences
- Need to increase engagement

**AI Solution**
- Personalized recommendations
- Thumbnail customization
- Content production insights

**Results**
- 80% of watched content from recommendations
- Estimated $1 billion annual value
- Reduced churn significantly

**Key Takeaway**: AI-driven personalization directly impacts customer retention and satisfaction.

### Case Study 2: Amazon Supply Chain

**Challenge**
- Complex global logistics
- Inventory management
- Delivery optimization

**AI Solution**
- Demand forecasting
- Warehouse robotics
- Route optimization
- Anticipatory shipping

**Results**
- Reduced delivery times
- Lower operational costs
- Improved customer satisfaction

**Key Takeaway**: AI can transform operational efficiency at scale.

### Case Study 3: JPMorgan COIN

**Challenge**
- Manual contract review
- High error rates
- Time-consuming process

**AI Solution**
- Contract Intelligence (COIN) platform
- Automated document analysis
- Pattern recognition

**Results**
- 360,000 hours of work reduced to seconds
- Fewer errors
- Lawyers freed for higher-value work

**Key Takeaway**: AI excels at repetitive, rules-based tasks with high accuracy requirements.

### Case Study 4: Starbucks Personalization

**Challenge**
- Mass market brand seeking personalization
- Diverse customer preferences
- Multiple touchpoints

**AI Solution**
- Deep Brew AI platform
- Personalized offers
- Inventory optimization
- Labor scheduling

**Results**
- Increased customer loyalty
- Higher average order value
- Improved operational efficiency

**Key Takeaway**: AI enables mass personalization that was previously impossible.

### Common Success Factors

1. Clear business objectives
2. Executive sponsorship
3. Quality data foundation
4. Iterative implementation
5. Change management focus
6. Continuous improvement mindset
        `,
      },
    ],
    quiz: [
      {
        id: 'q3-1',
        question: 'What are the key components of an AI strategy framework?',
        options: [
          'Only technology selection',
          'Vision/Goals, Use Cases, Data Strategy, Technology, and Talent',
          'Just hiring data scientists',
          'Buying the most expensive AI tools',
        ],
        correctAnswer: 1,
      },
      {
        id: 'q3-2',
        question: 'In a GAN, what is the role of the Generator?',
        options: [
          'To evaluate if content is real or fake',
          'To store training data',
          'To create new data and try to make it realistic',
          'To connect to external APIs',
        ],
        correctAnswer: 2,
      },
      {
        id: 'q3-3',
        question: 'What is a key consideration when selecting AI tools for business?',
        options: [
          'Only the price matters',
          'Scalability, integration, ease of use, cost, support, and security',
          'Always build custom solutions instead of buying',
          'Choose the newest tool available',
        ],
        correctAnswer: 1,
      },
      {
        id: 'q3-4',
        question: 'What was the primary business impact of Netflix\'s recommendation engine?',
        options: [
          'Reduced content library size',
          '80% of watched content comes from recommendations',
          'Eliminated the need for new content',
          'Increased subscription prices',
        ],
        correctAnswer: 1,
      },
      {
        id: 'q3-5',
        question: 'Which is a common pitfall when implementing AI in business?',
        options: [
          'Starting with small pilot projects',
          'Ensuring data quality',
          'Starting too big without clear objectives',
          'Getting executive sponsorship',
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: 'ai-ethics',
    title: 'AI Ethics & Bias',
    description: 'Examine the ethical considerations, biases, and responsibilities in AI development and deployment.',
    duration: '40 min',
    order: 4,
    lessons: [
      {
        id: 'ethical-considerations',
        title: 'Ethical Considerations Overview',
        objectives: [
          'Understand the importance of AI ethics',
          'Learn key ethical principles for AI',
          'Recognize stakeholder responsibilities',
        ],
        content: `
## The Importance of AI Ethics

As AI becomes more powerful and pervasive, ethical considerations become increasingly critical. AI systems make decisions affecting millions of people, making ethics a practical necessity, not just a philosophical concern.

### Why AI Ethics Matters

- AI decisions affect real people's lives
- Systems can perpetuate or amplify biases
- Lack of transparency can erode trust
- Potential for misuse and harm
- Long-term societal implications

### Core Ethical Principles

**1. Fairness**
- Equal treatment regardless of demographics
- Avoiding discrimination
- Equitable outcomes

**2. Transparency**
- Explainable decision-making
- Clear communication about AI use
- Audit trails

**3. Privacy**
- Data protection
- Consent and control
- Minimal data collection

**4. Accountability**
- Clear responsibility
- Governance structures
- Redress mechanisms

**5. Safety**
- Harm prevention
- Robust testing
- Fail-safe designs

### Stakeholder Responsibilities

**Developers**
- Build with ethics in mind
- Test for bias and fairness
- Document limitations

**Organizations**
- Establish AI governance
- Monitor deployed systems
- Respond to concerns

**Regulators**
- Create appropriate frameworks
- Enforce standards
- Protect citizens

**Users**
- Understand AI limitations
- Report issues
- Make informed choices

### Ethical Frameworks

- **Deontological**: Focus on rules and duties
- **Consequentialist**: Focus on outcomes
- **Virtue Ethics**: Focus on character and intentions
- **Rights-Based**: Focus on protecting rights
        `,
      },
      {
        id: 'data-collection-bias',
        title: 'Data Collection and Bias Consequences',
        objectives: [
          'Understand how bias enters AI systems',
          'Learn about types of data bias',
          'Recognize real-world consequences',
        ],
        content: `
## Understanding Bias in AI

Bias in AI systems often originates from the data used to train them. Understanding this is crucial for building fair systems.

### Sources of Bias

**Historical Bias**
- Data reflects past inequalities
- Perpetuates existing disparities
- Example: Hiring algorithms trained on historical data

**Representation Bias**
- Underrepresentation of certain groups
- Skewed training data
- Example: Face recognition trained mostly on one demographic

**Measurement Bias**
- Flawed data collection methods
- Inconsistent labeling
- Proxy variables that correlate with protected attributes

**Aggregation Bias**
- Assuming one model fits all groups
- Ignoring subgroup differences
- Example: Medical AI that works differently across populations

### Types of Data Problems

| Problem | Description | Example |
|---------|-------------|---------|
| Missing Data | Gaps in representation | Rural communities absent from datasets |
| Label Bias | Subjective labeling | Different annotators, different standards |
| Selection Bias | Non-random sampling | Online surveys missing offline populations |
| Temporal Bias | Outdated information | Training on old data for current predictions |

### Real-World Consequences

**Criminal Justice**
- Risk assessment tools with racial disparities
- Predictive policing reinforcing patterns
- Impacts on parole and sentencing

**Financial Services**
- Credit scoring affecting minorities
- Insurance pricing disparities
- Loan approval biases

**Employment**
- Resume screening discrimination
- Interview assessment biases
- Promotion algorithm disparities

**Healthcare**
- Diagnostic accuracy variations
- Treatment recommendation disparities
- Resource allocation inequities

### The Feedback Loop

1. Biased data trains AI
2. AI makes biased decisions
3. Decisions create more biased data
4. Cycle continues and amplifies

### Mitigation Strategies

- Diverse and representative datasets
- Bias audits and testing
- Continuous monitoring
- Stakeholder involvement
- Transparency in limitations
        `,
      },
      {
        id: 'bias-decision-making',
        title: 'Bias Impact on Decision-Making',
        objectives: [
          'Analyze how bias affects AI decisions',
          'Understand cascading effects',
          'Learn detection and mitigation techniques',
        ],
        content: `
## How Bias Shapes AI Decisions

Understanding the mechanisms through which bias influences AI decision-making helps us address these issues effectively.

### Decision Points and Bias

**Input Processing**
- Which features are used?
- How are inputs weighted?
- What gets filtered out?

**Model Training**
- What patterns are learned?
- Which correlations are emphasized?
- What gets optimized?

**Output Generation**
- How are predictions made?
- What thresholds are applied?
- Who benefits or suffers?

### Cascading Effects

Bias at one stage compounds throughout:

1. **Data Stage**: Biased collection → skewed representation
2. **Training Stage**: Biased patterns → discriminatory models
3. **Deployment Stage**: Biased decisions → real-world harm
4. **Feedback Stage**: Biased outcomes → reinforced bias

### Detection Techniques

**Statistical Analysis**
- Disparate impact testing
- Fairness metrics
- Subgroup performance analysis

**Audit Processes**
- Regular bias audits
- Third-party evaluation
- Stakeholder feedback

**Monitoring Systems**
- Real-time bias detection
- Outcome tracking
- Alert mechanisms

### Fairness Metrics

| Metric | Description |
|--------|-------------|
| Demographic Parity | Equal positive rates across groups |
| Equalized Odds | Equal true/false positive rates |
| Individual Fairness | Similar individuals treated similarly |
| Counterfactual Fairness | Same outcome if sensitive attributes changed |

### Mitigation Approaches

**Pre-processing**
- Data rebalancing
- Feature transformation
- Bias removal from data

**In-processing**
- Fair learning algorithms
- Constraint optimization
- Adversarial debiasing

**Post-processing**
- Threshold adjustment
- Outcome calibration
- Decision modification

### Organizational Practices

- Diverse development teams
- Ethics review boards
- Clear accountability
- Continuous improvement
- Transparent reporting
        `,
      },
      {
        id: 'ai-healthcare-ethics',
        title: 'Use-Case: AI in Healthcare Ethics',
        objectives: [
          'Examine ethical challenges in healthcare AI',
          'Analyze real-world cases',
          'Consider frameworks for ethical healthcare AI',
        ],
        content: `
## Ethical Challenges in Healthcare AI

Healthcare AI presents unique ethical challenges due to the direct impact on human health and well-being.

### Key Ethical Concerns

**Patient Privacy**
- Sensitive health data protection
- Consent for AI-assisted care
- Data sharing and secondary use

**Diagnostic Accuracy**
- False positives and negatives
- Liability for AI errors
- Human oversight requirements

**Access and Equity**
- Technology access disparities
- Training data representation
- Who benefits from AI advances?

**Doctor-Patient Relationship**
- Role of AI in clinical decisions
- Trust and transparency
- Human connection in healthcare

### Case Study: Algorithmic Bias in Healthcare

A major healthcare algorithm was found to systematically assign lower risk scores to Black patients, resulting in them receiving less care than white patients with the same health needs.

**What Happened**
- Algorithm used healthcare costs as proxy for health needs
- Historical spending disparities affected predictions
- Black patients received lower risk scores

**The Impact**
- Reduced access to care management programs
- Perpetuated healthcare disparities
- Affected millions of patients

**Lessons Learned**
- Proxy variables can encode bias
- Need for careful variable selection
- Importance of outcome-based validation

### Ethical Frameworks for Healthcare AI

**1. Beneficence**
- AI should benefit patients
- Improve health outcomes
- Enhance care quality

**2. Non-maleficence**
- Do no harm
- Minimize risks
- Prioritize safety

**3. Autonomy**
- Respect patient choices
- Informed consent
- Right to human care

**4. Justice**
- Fair distribution of benefits
- Equal access to AI advances
- Address health disparities

### Best Practices

- Inclusive training data
- Clinical validation across populations
- Transparent limitations
- Human oversight requirements
- Regular bias audits
- Patient consent processes
- Clear accountability structures

### The Path Forward

Healthcare AI holds immense promise, but realizing this potential requires:
- Robust ethical frameworks
- Diverse stakeholder involvement
- Continuous monitoring
- Commitment to equity
- Balance of innovation and caution
        `,
      },
    ],
    quiz: [
      {
        id: 'q4-1',
        question: 'What are the core ethical principles for AI?',
        options: [
          'Speed, efficiency, and profitability',
          'Fairness, transparency, privacy, accountability, and safety',
          'Innovation and disruption',
          'Market share and growth',
        ],
        correctAnswer: 1,
      },
      {
        id: 'q4-2',
        question: 'What is "historical bias" in AI?',
        options: [
          'AI that only works with old computers',
          'Data that reflects past inequalities, perpetuating existing disparities',
          'A preference for older algorithms',
          'Using historical events as training data',
        ],
        correctAnswer: 1,
      },
      {
        id: 'q4-3',
        question: 'Why is the AI bias feedback loop concerning?',
        options: [
          'It makes AI too accurate',
          'Biased decisions create more biased data, amplifying the original bias',
          'It only affects computers',
          'Feedback loops improve AI automatically',
        ],
        correctAnswer: 1,
      },
      {
        id: 'q4-4',
        question: 'In the healthcare algorithm bias case study, what was the main issue?',
        options: [
          'The algorithm was too expensive',
          'Healthcare costs were used as a proxy for health needs, encoding racial disparities',
          'The algorithm was too accurate',
          'Patients didn\'t want AI help',
        ],
        correctAnswer: 1,
      },
      {
        id: 'q4-5',
        question: 'Which is a mitigation approach for bias in AI?',
        options: [
          'Ignoring the problem',
          'Using only one type of data',
          'Pre-processing (data rebalancing), in-processing (fair algorithms), and post-processing (outcome calibration)',
          'Removing all human oversight',
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: 'ai-future-careers',
    title: 'Future of AI & Careers',
    description: 'Explore the future trajectory of AI and its impact on careers, skills, and opportunities.',
    duration: '30 min',
    order: 5,
    lessons: [
      {
        id: 'ai-global-challenges',
        title: 'AI\'s Role in Global Challenges',
        objectives: [
          'Understand how AI addresses global problems',
          'Explore AI applications for sustainability',
          'Consider AI\'s potential for positive impact',
        ],
        content: `
## AI for Global Good

Artificial intelligence has the potential to address some of humanity's most pressing challenges, from climate change to healthcare access.

### Climate and Environment

**Energy Optimization**
- Smart grid management
- Building energy efficiency
- Renewable energy forecasting

**Climate Modeling**
- Better prediction models
- Extreme weather forecasting
- Carbon footprint tracking

**Conservation**
- Wildlife monitoring
- Deforestation detection
- Ocean health assessment

### Healthcare Access

**Remote Diagnosis**
- AI-powered telemedicine
- Portable diagnostic tools
- Rural healthcare access

**Drug Discovery**
- Faster drug development
- Personalized medicine
- Rare disease research

**Disease Prevention**
- Outbreak prediction
- Vaccination optimization
- Health monitoring

### Food Security

**Precision Agriculture**
- Crop yield optimization
- Pest and disease detection
- Water management

**Supply Chain**
- Reducing food waste
- Distribution optimization
- Quality monitoring

### Education

**Personalized Learning**
- Adaptive educational content
- Learning gap identification
- Accessible education

**Global Access**
- Translation tools
- Remote learning platforms
- Skill development programs

### Disaster Response

**Prediction and Preparation**
- Natural disaster forecasting
- Evacuation planning
- Resource pre-positioning

**Response Coordination**
- Damage assessment
- Resource allocation
- Communication systems

### Challenges to Consider

- Technology access disparities
- Implementation costs
- Data availability
- Cultural considerations
- Ethical implications
- Sustainability of solutions

### Examples of Impact

- Google's flood forecasting in India
- Microsoft's AI for Earth initiative
- IBM's weather prediction systems
- Various AI-powered conservation projects
        `,
      },
      {
        id: 'ai-reshaping-industries',
        title: 'AI Reshaping Industries',
        objectives: [
          'Analyze industry transformation through AI',
          'Identify emerging opportunities',
          'Prepare for industry changes',
        ],
        content: `
## Industry Transformation

AI is fundamentally reshaping how industries operate, creating new opportunities and disrupting traditional business models.

### Manufacturing

**Current Changes**
- Predictive maintenance
- Quality control automation
- Supply chain optimization

**Future Direction**
- Fully autonomous factories
- Custom mass production
- Digital twins

### Financial Services

**Current Changes**
- Algorithmic trading
- Fraud detection
- Customer service automation

**Future Direction**
- Hyper-personalized services
- Real-time risk assessment
- Autonomous financial advisors

### Healthcare

**Current Changes**
- Diagnostic assistance
- Drug discovery acceleration
- Administrative automation

**Future Direction**
- Preventive and predictive medicine
- Personalized treatment plans
- AI-assisted surgery

### Retail

**Current Changes**
- Personalized recommendations
- Inventory management
- Customer service chatbots

**Future Direction**
- Autonomous stores
- Hyper-personalization
- AR/VR shopping experiences

### Transportation

**Current Changes**
- Route optimization
- Demand prediction
- Safety systems

**Future Direction**
- Autonomous vehicles
- Smart city integration
- On-demand mobility

### Agriculture

**Current Changes**
- Crop monitoring
- Yield prediction
- Resource optimization

**Future Direction**
- Autonomous farming
- Indoor vertical farms
- Genetic optimization

### Media and Entertainment

**Current Changes**
- Content recommendations
- Automated journalism
- Gaming AI

**Future Direction**
- AI-generated content
- Personalized entertainment
- Immersive experiences

### Preparing for Change

1. Stay informed about industry trends
2. Develop relevant AI literacy
3. Embrace continuous learning
4. Build adaptable skill sets
5. Network across disciplines
        `,
      },
      {
        id: 'job-displacement-creation',
        title: 'Job Displacement vs. Job Creation',
        objectives: [
          'Understand AI\'s impact on employment',
          'Analyze job transformation patterns',
          'Identify new career opportunities',
        ],
        content: `
## The Changing Employment Landscape

AI will significantly impact employment, but the picture is nuanced—while some jobs will be displaced, many new opportunities will emerge.

### Jobs at Risk of Automation

**High Risk Categories**
- Routine data processing
- Simple decision-making tasks
- Repetitive manual labor
- Basic customer service

**Examples**
- Data entry clerks
- Telemarketing
- Assembly line workers
- Basic bookkeeping

### Jobs Enhanced by AI

**Augmented Roles**
- Doctors (diagnostic support)
- Lawyers (research assistance)
- Teachers (personalized learning)
- Engineers (design optimization)

### New Jobs Created by AI

**Emerging Roles**
- AI Trainers and Operators
- Machine Learning Engineers
- AI Ethics Officers
- Human-AI Interaction Designers
- AI Content Curators
- Automation Strategists
- Data Labelers and Annotators

### The Skills Shift

| Declining Demand | Increasing Demand |
|-----------------|-------------------|
| Routine cognitive tasks | Complex problem-solving |
| Basic data processing | AI collaboration |
| Simple analysis | Creative thinking |
| Repetitive tasks | Emotional intelligence |

### Economic Perspectives

**Concerns**
- Short-term displacement
- Wage pressure in some sectors
- Inequality risks
- Transition challenges

**Opportunities**
- Productivity gains
- New industry creation
- Economic growth
- Quality of life improvements

### Transition Strategies

**For Individuals**
- Continuous learning
- Develop AI literacy
- Build human-centric skills
- Stay adaptable

**For Organizations**
- Reskilling programs
- Gradual transition planning
- Social responsibility
- New job creation focus

**For Society**
- Education system updates
- Safety net programs
- Lifelong learning support
- Policy adaptation

### The Balanced View

Most experts agree that:
- AI will transform rather than eliminate most jobs
- New opportunities will emerge
- The transition requires proactive management
- Human skills remain valuable
        `,
      },
      {
        id: 'skills-of-future',
        title: 'Skills of the Future',
        objectives: [
          'Identify key skills for the AI era',
          'Create a personal development plan',
          'Understand lifelong learning importance',
        ],
        content: `
## Essential Skills for the AI Era

As AI transforms the workplace, certain skills become increasingly valuable. Success requires a combination of technical and human capabilities.

### Technical Skills

**AI and Data Literacy**
- Understanding AI capabilities and limitations
- Data interpretation and analysis
- Basic programming concepts
- Tool proficiency

**Digital Fluency**
- Comfort with new technologies
- Ability to learn new tools quickly
- Online collaboration skills
- Cybersecurity awareness

**Domain Expertise + AI**
- Deep industry knowledge
- AI application in your field
- Cross-functional understanding

### Human Skills

**Critical Thinking**
- Analyzing AI outputs
- Identifying bias and errors
- Making informed decisions
- Problem-solving

**Creativity and Innovation**
- Generating novel ideas
- Thinking beyond AI suggestions
- Creative problem-solving
- Design thinking

**Emotional Intelligence**
- Empathy and understanding
- Communication skills
- Leadership and collaboration
- Conflict resolution

**Adaptability**
- Embracing change
- Resilience
- Continuous learning mindset
- Flexibility

### The T-Shaped Professional

Aim for:
- **Deep expertise** in one area (vertical bar)
- **Broad knowledge** across disciplines (horizontal bar)
- **AI literacy** as a core component

### Building Your Skill Portfolio

**Assessment**
1. Evaluate current skills
2. Identify industry trends
3. Spot gaps and opportunities
4. Prioritize development areas

**Development**
1. Formal education and certifications
2. Online courses and resources
3. Hands-on projects
4. Mentorship and networking

**Application**
1. Apply learning immediately
2. Seek challenging assignments
3. Document achievements
4. Share knowledge with others

### Lifelong Learning

In the AI era, learning never stops:
- Stay curious and open
- Dedicate time to learning
- Experiment with new tools
- Learn from diverse sources
- Build learning networks

### Key Takeaways

- Combine technical and human skills
- Prioritize adaptability
- Embrace continuous learning
- Leverage AI, don't compete with it
- Develop unique human capabilities
        `,
      },
      {
        id: 'ai-healthcare-careers-case',
        title: 'Case Study: AI in Healthcare Careers',
        objectives: [
          'Explore healthcare career evolution',
          'Identify emerging healthcare AI roles',
          'Plan for healthcare AI careers',
        ],
        content: `
## Healthcare Careers in the AI Era

Healthcare provides a compelling case study of how AI transforms careers—creating new roles while evolving existing ones.

### Traditional Roles Evolving

**Radiologists**
- From: Reviewing all images manually
- To: Focusing on complex cases, supervising AI
- New skills: AI interpretation, algorithm validation

**Nurses**
- From: Primarily manual monitoring
- To: AI-assisted patient monitoring
- New skills: Health informatics, AI tool management

**Administrators**
- From: Manual scheduling and records
- To: AI system oversight, strategic planning
- New skills: Healthcare AI governance, analytics

### New Healthcare AI Roles

**Clinical AI Specialist**
- Bridge between technical teams and clinicians
- Validate AI tools in clinical settings
- Ensure appropriate use and interpretation

**Health Data Scientist**
- Analyze healthcare data
- Develop predictive models
- Improve patient outcomes through data

**AI Ethics and Compliance Officer**
- Ensure ethical AI use
- Monitor for bias
- Maintain regulatory compliance

**Digital Health Product Manager**
- Design AI health products
- Coordinate development teams
- Ensure user needs are met

**Medical AI Trainer**
- Prepare data for AI training
- Validate AI outputs
- Improve model accuracy

### Skills for Healthcare AI Careers

**Technical**
- Health informatics
- Data analysis
- AI/ML basics
- EHR systems

**Clinical**
- Medical knowledge
- Patient care understanding
- Clinical workflow expertise

**Soft Skills**
- Communication
- Problem-solving
- Ethical reasoning
- Change management

### Career Pathways

**For Healthcare Professionals**
1. Build AI literacy
2. Participate in AI projects
3. Specialize in health informatics
4. Lead AI implementation

**For Tech Professionals**
1. Learn healthcare domain
2. Understand regulations
3. Work with clinical teams
4. Specialize in health AI

### Future Opportunities

- Telemedicine AI specialists
- Personalized medicine consultants
- AI clinical trial managers
- Health AI researchers
- Patient AI advocates

### Getting Started

1. Take healthcare AI courses
2. Follow industry developments
3. Network with professionals
4. Gain practical experience
5. Consider certifications
6. Stay current with regulations
        `,
      },
    ],
    quiz: [
      {
        id: 'q5-1',
        question: 'How is AI being used to address climate challenges?',
        options: [
          'AI cannot help with climate issues',
          'Only for weather forecasting',
          'Energy optimization, climate modeling, and conservation efforts',
          'Increasing carbon emissions',
        ],
        correctAnswer: 2,
      },
      {
        id: 'q5-2',
        question: 'Which category of jobs is at highest risk of automation?',
        options: [
          'Creative problem-solving roles',
          'Routine data processing and repetitive tasks',
          'Jobs requiring emotional intelligence',
          'Leadership positions',
        ],
        correctAnswer: 1,
      },
      {
        id: 'q5-3',
        question: 'What is a "T-shaped professional"?',
        options: [
          'Someone who only knows one thing',
          'Someone with deep expertise in one area and broad knowledge across disciplines',
          'A professional who works in the letter T industry',
          'Someone who avoids learning new skills',
        ],
        correctAnswer: 1,
      },
      {
        id: 'q5-4',
        question: 'Which is an emerging healthcare AI role?',
        options: [
          'Traditional surgeon',
          'Clinical AI Specialist',
          'Manual records clerk',
          'Telephone operator',
        ],
        correctAnswer: 1,
      },
      {
        id: 'q5-5',
        question: 'What is the balanced view on AI and employment?',
        options: [
          'AI will eliminate all jobs',
          'AI will have no impact on jobs',
          'AI will transform rather than eliminate most jobs, creating new opportunities while requiring proactive transition management',
          'Only tech jobs will exist in the future',
        ],
        correctAnswer: 2,
      },
    ],
  },
]

export function getModule(moduleId: string): Module | undefined {
  return modules.find((m) => m.id === moduleId)
}

export function getLesson(moduleId: string, lessonId: string): Lesson | undefined {
  const module = getModule(moduleId)
  return module?.lessons.find((l) => l.id === lessonId)
}

export function getModuleQuiz(moduleId: string): QuizQuestion[] | undefined {
  return getModule(moduleId)?.quiz
}

export function getAdjacentLessons(
  moduleId: string,
  lessonId: string
): { prev: Lesson | null; next: Lesson | null } {
  const module = getModule(moduleId)
  if (!module) return { prev: null, next: null }

  const lessonIndex = module.lessons.findIndex((l) => l.id === lessonId)
  if (lessonIndex === -1) return { prev: null, next: null }

  return {
    prev: lessonIndex > 0 ? module.lessons[lessonIndex - 1] : null,
    next: lessonIndex < module.lessons.length - 1 ? module.lessons[lessonIndex + 1] : null,
  }
}
