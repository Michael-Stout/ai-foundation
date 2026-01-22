export interface Lesson {
  id: string
  title: string
  content: string
  objectives?: string[]
}

export interface Lab {
  id: string
  title: string
  description: string
  objectives: string[]
  tools: {
    name: string
    url?: string
    type: string
  }[]
  content: string
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
  labs?: Lab[]
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
          'Learn key milestones in AI development',
          'Recognize AI core capabilities and their applications',
        ],
        content: `
## What is Artificial Intelligence?

:::key-concept[Definition]
AI is the simulation of human intelligence in machines, enabling them to perform tasks such as visual perception, speech recognition, decision-making, and language translation. These capabilities are powered by advanced algorithms, machine learning, and deep learning.
:::

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

| Year | Milestone |
|------|-----------|
| 1950s | The Turing Test was introduced; early AI programs like the Logic Theorist developed |
| 1980s | Expert systems and neural networks gained prominence |
| 1997 | IBM's Deep Blue defeated world chess champion Garry Kasparov |
| 2012 | Deep Learning revolutionized AI with breakthroughs in image recognition (AlexNet) |
| 2016 | AlphaGo defeated world champion Go player Lee Sedol |
| 2020s | AI models like GPT-3 and GPT-4 pushed boundaries in natural language understanding |

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

## AI's Impact & Influence

:::feature-list
:::feature[AI's Learning Abilities]
Through techniques like machine learning and deep learning, AI can learn from vast datasets, improve its performance over time, and adapt to new situations, making it more effective in complex tasks.
:::feature[Impact on Industries]
AI is revolutionizing various industries, including healthcare (for diagnostics and drug discovery), finance (for fraud detection and investment analysis), and manufacturing (for automation and predictive maintenance), leading to increased efficiency and innovation.
:::feature[Significance in Modern Technology]
AI is integral to the development of modern technologies, driving advancements in automation, data analysis, and real-time decision-making. It underpins many innovations, from smart devices to AI-powered personal assistants, and plays a critical role in shaping the future of technology.
:::feature[Enhancing Productivity]
AI helps improve productivity by automating routine tasks, optimizing processes, and enabling faster data-driven decision-making. This frees up human resources to focus on more complex and creative tasks.
:::feature[Societal and Economic Impact]
AI has significant societal implications, reshaping how we work, communicate, and interact with technology. It can solve complex global challenges, from healthcare improvements to addressing climate change.
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

:::key-concept[AI in Daily Life]
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
    labs: [
      {
        id: 'image-classification-lab',
        title: 'Image Classification using Google Teachable Machine',
        description: 'Can a machine learning model accurately distinguish between two facial expressions using image data? This lab explores how ML models learn visual patterns and highlights the impact of training data quality and quantity.',
        objectives: [
          'Build an image classification model without writing code',
          'Understand how ML models learn from visual patterns',
          'Experience the impact of training data quality and quantity',
          'Test and analyze model behavior and limitations',
        ],
        tools: [
          {
            name: 'Google Teachable Machine',
            url: 'https://teachablemachine.withgoogle.com/',
            type: 'No-code, browser-based ML training platform',
          },
        ],
        content: `
## Overview

In this hands-on lab, you'll use **Google Teachable Machine** to build a machine learning model that can distinguish between two facial expressions—happy and sad. No coding required!

:::key-concept[What You'll Build]
A real-time **image classification model** that recognizes facial expressions using your webcam. You'll train it, test it, and analyze how it makes decisions.
:::

:::info
**Time:** 15-20 minutes | **Difficulty:** Beginner-friendly | **Requirements:** Webcam and modern browser
:::

:::tip[Step 1: Launch Teachable Machine]
1. Visit [Google Teachable Machine](https://teachablemachine.withgoogle.com/)
2. Click **"Get Started"**
3. Choose **"Image Project"** under "Standard Image Model"
:::

:::info
The Standard Image Model works with 224x224px color images and can be exported to TensorFlow, TFLite, and TF.js.
:::

:::tip[Step 2: Create Two Classes]
By default, two classes appear as "Class 1" and "Class 2". Rename them:
1. **Class 1** → Happy Face
2. **Class 2** → Sad Face
:::

:::tip[Step 3: Add Training Data]
For each class:
1. Click **"Webcam"** to capture photos of your face with the desired expression
2. Take at least **30–50 images per class** for better accuracy
3. Alternatively, click **"Upload"** to add images from your computer
:::

:::key-concept[Data Quality Tips]
1. Vary angles, lighting, and background to simulate real-world conditions
2. More diverse images = better model generalization
3. Consistent expressions help the model learn clear patterns
:::

:::tip[Step 4: Train the Model]
1. Click **"Train Model"**
2. Teachable Machine will preprocess the images and train a lightweight neural network in the browser
3. The process takes approximately 30–60 seconds depending on data volume
:::

:::warning
Don't switch browser tabs during training! The model trains in your browser and needs the tab to stay active.
:::

:::tip[Step 5: Test the Model]
After training:
1. Switch to the **"Preview"** panel
2. Use your webcam live to show different expressions
3. Observe whether the model accurately classifies "Happy" and "Sad" faces
4. Note the **confidence score (%)** given for each prediction
:::

:::tip[Step 6: Analyze Model Behavior]
Test the model's limits by trying different scenarios:
:::

| Test Scenario | Expected Behavior |
|---------------|-------------------|
| Clear happy expression | High confidence "Happy" classification |
| Clear sad expression | High confidence "Sad" classification |
| Poor lighting | Lower confidence, potential misclassification |
| Neutral expression | Uncertainty between classes |
| New person's face | May struggle if only trained on one person |

:::key-concept[Learning Point]
Misclassification highlights the **importance of diverse and sufficient data**. Adding more varied images improves model generalization and reduces overfitting.
:::

:::tip[Discussion Questions]
1. How did the model decide between Happy and Sad?
2. What happens when you test with a face it hasn't seen before?
3. What if you add a third class, like "Neutral Face"?
:::
4. How does model performance change with more data, better lighting, or clearer expressions?

## Key Takeaways

- **Data quantity matters**: More training images generally improve accuracy
- **Data diversity matters**: Varied conditions help the model generalize
- **ML learns patterns**: The model identifies visual features that distinguish classes
- **No-code ML is accessible**: You can build working ML models without programming
        `,
      },
      {
        id: 'supervised-unsupervised-lab',
        title: 'Supervised vs. Unsupervised Learning',
        description: 'Learn to identify the difference between labeled and unlabeled datasets, understand their structure, and explore how machine learning models interact with each type.',
        objectives: [
          'Visually identify labeled vs. unlabeled datasets',
          'Understand when to use supervised vs. unsupervised learning',
          'Apply classification concepts to a business scenario',
          'Experience clustering for pattern discovery',
        ],
        tools: [
          {
            name: 'Dataset Analysis',
            type: 'Conceptual walkthrough with sample data',
          },
        ],
        content: `
## Overview

In machine learning, the type of dataset—labeled or unlabeled—determines which learning approach to use. This lab helps you visually identify the difference and understand how data labeling influences model selection.

## Part 1: Supervised Learning with Labeled Data

### The Dataset

Examine this **labeled dataset** showing lead conversion data:

| Lead Location | Gender | Company Size | Revenue | Emails | Client |
|---------------|--------|--------------|---------|--------|--------|
| UK | F | 5 | 500,000 | 3 | NO |
| Ireland | F | 6 | 600,000 | 2 | NO |
| UK | M | 6 | 600,000 | 5 | **YES** |
| USA | F | 10 | 1,000,000 | 12 | **YES** |
| USA | F | 3 | 300,000 | 4 | **YES** |
| USA | M | 5 | 500,000 | 7 | **YES** |
| Germany | M | 6 | 600,000 | 1 | NO |

### Step 1: Recognize the Label

:::key-concept[Key Question]
Look at the "Client" column. What kind of values does it hold?
:::

The **Client** column contains YES or NO values—this is our **label**. Since we already know the outcome, this is a **labeled dataset** used for **supervised learning**.

### Step 2: Understand the Goal

**Business Context**: Imagine you're working in a sales team. Wouldn't it be useful to know which leads are likely to convert before spending time on all of them?

**Goal**: Train a model to predict whether a new lead will become a client based on their profile and behavior.

### Step 3: Choose the Algorithm

Since our prediction is YES or NO, this is a **binary classification task**.

**Suitable algorithms include:**
- Logistic Regression (simple and interpretable)
- Decision Trees (good with categorical + numerical data)
- Random Forest (more accurate, but complex)
- Support Vector Machines (for advanced use cases)

### Step 4: Evaluate the Model

We split data into **training (80%)** and **testing (20%)** sets.

**Key Metrics:**
| Metric | Description |
|--------|-------------|
| **Accuracy** | How often is the model correct overall? |
| **Precision** | Of predicted YES, how many were actually YES? |
| **Recall** | Of all real YES, how many did the model catch? |

:::tip
If we care about not missing high-potential clients, **recall** might be more important than precision.
:::

---

## Part 2: Unsupervised Learning with Unlabeled Data

### The Dataset (No Labels!)

Now examine this **unlabeled dataset**:

| Lead Location | Gender | Company Size | Revenue | Emails |
|---------------|--------|--------------|---------|--------|
| UK | F | 5 | 500,000 | 3 |
| Ireland | F | 6 | 600,000 | 2 |
| UK | M | 6 | 600,000 | 5 |
| USA | F | 10 | 1,000,000 | 12 |
| USA | F | 3 | 300,000 | 4 |
| USA | M | 5 | 500,000 | 7 |
| Germany | M | 6 | 600,000 | 1 |

:::key-concept[Key Observation]
There's no "Client" column! We don't know if these leads converted or not. Can we still use machine learning?
:::

**Yes!** We can use **unsupervised learning** to explore patterns.

### Step 1: Understand the Features

Even without labels, we have valuable features:
- Lead Location
- Gender
- Company Size
- Revenue
- Number of Emails

These provide clues for **similarity**—clustering helps group data points based on those clues.

### Step 2: Apply Clustering

Using **K-Means clustering**, we can divide leads into groups:

1. The algorithm measures how similar data points are
2. Groups them into clusters (e.g., Group 0, Group 1, Group 2)
3. Assigns each lead to one cluster

:::info
Even without knowing who converted, we might discover a group of high-revenue, highly engaged leads—useful for targeting!
:::

### Step 3: Visualize and Interpret

Plotting Company Size vs. Number of Emails might reveal:
- **Cluster A**: Small companies with low email volume
- **Cluster B**: Large companies with high engagement
- **Cluster C**: Medium companies with variable behavior

---

## Comparison Summary

| Aspect | Supervised Learning | Unsupervised Learning |
|--------|--------------------|-----------------------|
| **Data Type** | Labeled (includes outcomes) | Unlabeled (no outcome column) |
| **Goal** | Predict future outcomes | Find hidden patterns/groupings |
| **Output** | Classification or Regression | Clusters or reduced features |
| **Algorithms** | Logistic Regression, Decision Trees | K-Means, DBSCAN, PCA |
| **Use Case** | "Will this lead become a client?" | "Which leads behave similarly?" |

## Key Takeaways

:::tip[Supervised Learning]
Like a teacher showing students the answers during practice. The goal is to help the machine learn from known outcomes so it can predict future ones.
:::

:::tip[Unsupervised Learning]
Like exploring a new city without a map. The goal is to discover natural groupings and patterns without predefined answers.
:::
        `,
      },
      {
        id: 'email-classification-lab',
        title: 'Classifying Emails with Machine Learning',
        description: 'Build a supervised learning model to automatically classify incoming emails as "Important" or "Not Important" and analyze the results using an interactive dashboard.',
        objectives: [
          'Apply supervised learning to a real-world classification problem',
          'Understand how ML models evaluate email importance',
          'Explore data through interactive visualizations',
          'Compare different AI model performance',
        ],
        tools: [
          {
            name: 'Interactive Dashboard (Streamlit)',
            url: 'https://interactivedashboard.aicerts.ai/AI_Foundation_Lab_1_Email_Analysis',
            type: 'Web-based ML visualization platform',
          },
        ],
        content: `
## Overview

You're working as an intern at a tech startup that wants to create a machine learning model to automatically classify incoming emails as "Important" or "Not Important." Your challenge is to explore how supervised learning models make these classifications.

## The Problem

**Business Need**: Employees receive hundreds of emails daily. An ML model that automatically identifies important emails can save significant time and ensure critical messages aren't missed.

**ML Approach**: Build a supervised classification model using labeled email data.

## Step 1: Access the Dataset

Download the sample dataset:
[Email Dataset (Google Drive)](https://drive.google.com/file/d/1YgiYXgGoFanDo1Pz6xFT84Ep7-9rlKfv/view?usp=sharing)

The dataset contains email features including:
- Subject line text
- Sender information
- Email metadata
- Sentiment scores
- Region information
- **Label**: Important / Not Important

## Step 2: Launch the Interactive Dashboard

1. Visit the [Email Analysis Dashboard](https://interactivedashboard.aicerts.ai/AI_Foundation_Lab_1_Email_Analysis)
2. Upload your CSV dataset file
3. Explore the dashboard filters and visualizations

## Step 3: Explore the Dashboard Features

### Available Filters

| Filter | Purpose |
|--------|---------|
| **AI Model** | Compare different classification algorithms (Logistic Regression, etc.) |
| **Email Importance Level** | Filter by Important / Not Important |
| **Region** | Analyze emails by geographic region |

### Key Visualizations

:::card-grid
:::card[chart][Sentiment Trend]
Track daily average sentiment scores over time to identify patterns in email tone.
:::card[eye][Importance Distribution]
See the breakdown of Important vs. Not Important emails in your dataset.
:::card[database][Regional Volume]
Compare email volume across different regions (Global, Asia, Europe, North America).
:::card[brain][Sentiment by Region]
Analyze how email sentiment varies across geographic regions.
:::end-grid

## Step 4: Analyze Model Results

After uploading your data, examine:

### Filtered Data Sample
Review individual emails and their classifications to understand what the model considers "Important."

### Key Metrics to Observe
- **Total Emails Analyzed**: Dataset size
- **Important Email Percentage**: What proportion are classified as important?
- **AI Model Used**: Which algorithm is making predictions?

## Step 5: Experiment with Different Models

Try selecting different AI models from the dropdown and observe:

1. Does the Important/Not Important distribution change?
2. How does sentiment analysis vary by model?
3. Which regions have the most "Important" emails?

## Key Insights to Look For

:::info[Sample Insights]
Based on typical analysis:
- The region with highest volume might be **Global**
- Most positive sentiment region might be **Europe**
- Overall average sentiment score around **0.11**
- Important emails typically represent **6-7%** of all emails
:::

## Discussion Questions

1. **Feature Importance**: What features do you think the model uses most to classify importance?
2. **Model Comparison**: Why might different models give different results?
3. **Real-World Application**: How could you improve the model's accuracy for your specific use case?
4. **Unsupervised Alternative**: How would approaching this with clustering (unsupervised) differ from classification (supervised)?

## Supervised vs. Unsupervised Comparison

| Approach | Method | Output |
|----------|--------|--------|
| **Supervised** | Train on labeled emails (Important/Not Important) | Predicts importance for new emails |
| **Unsupervised** | Cluster emails by similarity | Groups emails with similar characteristics (may or may not align with importance) |

:::key-concept[Key Takeaway]
Supervised learning is ideal when you have labeled training data and a specific prediction goal. The model learns the patterns that distinguish "Important" from "Not Important" based on historical examples.
:::

## Next Steps

Use these insights to:
- Refine communication strategies
- Filter out unimportant messages automatically
- Prioritize responses to important emails
- Understand regional communication patterns
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
    title: 'Prompt Engineering - Interacting with AI',
    description: 'Learn the crucial skill of designing effective prompts to guide AI models in generating accurate, relevant, and high-quality outputs across business, education, and creative industries.',
    duration: '50 min',
    order: 2,
    lessons: [
      {
        id: 'defining-prompt-engineering',
        title: 'Defining Prompt Engineering',
        objectives: [
          'Define prompt engineering and understand its fundamental concepts',
          'Recognize the importance of prompt engineering in optimizing AI interactions',
          'Learn how effective prompts improve AI output quality and reduce bias',
          'Understand the role of prompt engineering in AI adoption across industries',
        ],
        content: `
## What is Prompt Engineering?

:::key-concept[Definition]
Prompt Engineering is the art and science of designing and refining inputs (prompts) to guide AI models in generating desired outputs. It involves structuring questions, commands, or requests to enhance AI's understanding and performance, ensuring responses are accurate, relevant, and aligned with specific goals.
:::

## Why Prompt Engineering Matters

:::card-grid
:::card[chart][Improves Output Quality]
Well-crafted prompts help generate more accurate, relevant, and coherent responses from AI models, enhancing the quality of every interaction.
:::card[cog][Reduces Bias & Errors]
Effective prompt engineering minimizes the risk of biased or incorrect responses by guiding AI in a specific direction with clear expectations.
:::card[robot][Optimizes Efficiency]
Properly structured prompts make AI models more efficient, saving time by reducing the need for multiple iterations and response refinements.
:::card[brain][Enhances Customization]
Prompt engineering allows users to tailor AI responses to meet specific needs across domains like business, healthcare, or education.
:::end-grid

## The Power of Effective Prompts

:::feature-list
:::feature[Enables Complex Tasks]
By strategically crafting prompts, complex tasks can be broken down into manageable steps, allowing AI to tackle multifaceted problems more effectively.
:::feature[Improves User-AI Interaction]
Good prompt engineering ensures smoother, more intuitive interactions between users and AI, enhancing the overall user experience.
:::feature[Boosts AI Adoption]
As industries adopt AI tools, prompt engineering plays a key role in ensuring AI is used effectively to address real-world challenges.
:::feature[Facilitates Learning]
Effective prompts help AI models learn more effectively from data, improving their ability to adapt to new situations and generate innovative solutions.
:::end-list

## The Anatomy of a Prompt

| Component | Description | Example |
|-----------|-------------|---------|
| **Context** | Background information the AI needs | "You are a marketing expert..." |
| **Instruction** | Clear directive of what you want | "Write a product description..." |
| **Examples** | Sample inputs and outputs | "Like this: Input → Output" |
| **Constraints** | Limitations or specifications | "Keep it under 200 words" |
| **Format** | How you want the output structured | "Use bullet points" |

## Prompt vs. Traditional Programming

| Traditional Programming | Prompt Engineering |
|------------------------|-------------------|
| Explicit instructions | Natural language |
| Deterministic output | Probabilistic output |
| Code syntax | Conversational input |
| Fixed behavior | Adaptable responses |
| Requires coding skills | Accessible to everyone |

## The Iterative Process

:::timeline
:::event[Step 1][Draft Initial Prompt]
Start with a clear goal and formulate a targeted question or request aligned with your desired outcome.
:::event[Step 2][Test with AI Model]
Submit the prompt to the AI and observe the generated response carefully.
:::event[Step 3][Analyze Output]
Evaluate if the response meets expectations or if there are areas of ambiguity or misinterpretation.
:::event[Step 4][Refine the Prompt]
Modify based on feedback to make it more specific or provide additional context.
:::event[Step 5][Repeat Until Satisfied]
Continue the cycle for continuous improvement until the output aligns with your goals.
:::end-timeline

:::tip
Prompt engineering is a crucial skill for utilizing generative AI models effectively. The quality of AI output is directly related to the quality of your input—invest time in crafting clear, specific prompts to maximize AI's potential.
:::
        `,
      },
      {
        id: 'well-crafted-prompts',
        title: 'Enhancement through Well-Crafted Prompts',
        objectives: [
          'Master techniques for writing more effective prompts',
          'Learn to set clear objectives and provide appropriate context',
          'Understand the iterative refinement process for prompt optimization',
          'Apply prompt patterns and templates for consistent results',
        ],
        content: `
## Crafting Effective Prompts

:::key-concept[Enhancement Principle]
Well-crafted prompts significantly enhance AI-driven analysis by ensuring precise, relevant, and context-aware outputs. Thoughtfully structured prompts help extract deeper insights, refine responses, and maximize AI's potential for decision-making.
:::

## Key Aspects of Prompt Enhancement

:::card-grid
:::card[chart][Clear Objective Setting]
Start with a clear goal to formulate a targeted question, ensuring AI generates responses aligned with your desired outcome.
:::card[eye][Specificity in Prompts]
Being specific prevents AI from generating broad or irrelevant responses, guiding it to provide more accurate, actionable answers.
:::card[book][Contextualizing Prompts]
Providing context helps AI better understand the prompt, improving accuracy while avoiding confusion from excessive information.
:::card[cog][Balancing Specificity & Openness]
Strike the right balance between specific and open-ended prompts to enable both targeted responses and creative exploration.
:::end-grid

## The Iterative Refinement Process

| Stage | Description | Action |
|-------|-------------|--------|
| **Analyze Response** | Evaluate if AI's output meets expectations | Check for ambiguity or misinterpretation |
| **Adjust Prompt** | Modify based on feedback | Add specificity or additional context |
| **Re-evaluate** | Assess new responses | Repeat cycle for continuous improvement |
| **Optimize** | Balance precision and creativity | Ensure alignment with objectives |

## Prompt Patterns

:::info
**The Persona Pattern**
"Act as a [role/expert]. [Your task/question]."

Example: "Act as a senior software engineer. Review this code for security vulnerabilities."

**The Template Pattern**
"Given [context], please [action] in the format of [structure]."

**The Few-Shot Pattern**
"Here are examples: Input: [ex1] → Output: [result1]. Now, Input: [your input] → Output:"
:::

## Example Prompt Improvements

| Weak Prompt | Strong Prompt | Why It's Better |
|-------------|---------------|-----------------|
| "Write about AI" | "Write a 500-word blog post about AI benefits in education, focusing on personalized learning and real-time feedback" | Specific length, topic, and focus areas |
| "Summarize this" | "Provide a 3-bullet summary of key points for executives, highlighting revenue growth and profit margins" | Clear format and specific content requirements |
| "Fix the code" | "Debug this Python function and explain what was wrong, then suggest best practices" | Requests explanation and additional value |
| "Make it better" | "Improve clarity and engagement while maintaining professional tone, focusing on environmental benefits" | Specific improvement criteria and focus |

## Advanced Enhancement Techniques

:::feature-list
:::feature[Chain of Thought]
Ask the AI to show its reasoning step-by-step. This improves accuracy for complex problems and helps you understand how the AI arrived at its answer.
:::feature[Self-Consistency]
Generate multiple responses to the same prompt and compare them. This helps identify the most reliable and accurate output.
:::feature[Iterative Refinement]
Craft, test, analyze, and refine prompts continuously. Each iteration brings you closer to optimal results.
:::feature[Precision and Creativity Balance]
Effective prompt crafting involves both precision for exact responses and openness to allow AI to generate diverse ideas and innovative solutions.
:::end-list

:::warning
Common Pitfalls to Avoid:
- **Vague Instructions**: "Write something good" gives AI no direction
- **Missing Context**: Without background, AI may make incorrect assumptions
- **Overloading**: Too much information can confuse the model
- **No Format Specification**: Results may come in unusable formats
:::

:::tip
The prompt engineering process is dynamic, requiring continuous adaptation based on AI response quality. Constant feedback and adjustment ensure optimal results over time. Remember: a few extra minutes crafting a great prompt saves hours of revisions!
:::
        `,
      },
      {
        id: 'exploring-gpt4',
        title: 'Exploring GPT-4 & Large Language Models',
        objectives: [
          'Understand GPT-4 capabilities and advancements over previous models',
          'Learn about enhanced context understanding and nuanced response generation',
          'Recognize the diverse applications across industries',
          'Master prompting strategies specific to GPT-4',
        ],
        content: `
## Understanding GPT-4

:::key-concept[GPT-4 Overview]
GPT-4 is a powerful AI language model that enhances natural language understanding, data analysis, and decision-making across various domains. With advanced reasoning capabilities, it can process complex queries, generate insightful responses, and automate analytical tasks.
:::

## Key Features of GPT-4

:::card-grid
:::card[brain][Enhanced Context Understanding]
GPT-4 has improved ability to understand and retain context over longer conversations, leading to more coherent and relevant responses in extended interactions.
:::card[chat][Nuanced Response Generation]
Can generate more sophisticated responses, noticing subtle details and nuances in language to provide more insightful and tailored answers.
:::card[database][Expanded Knowledge Base]
Access to a broader and more up-to-date knowledge base, enabling accurate information across a wider range of topics and domains.
:::card[book][Improved Language Coherence]
Produces more coherent and natural-sounding responses, maintaining consistency throughout conversations for better user engagement.
:::end-grid

## GPT-4 Capabilities Comparison

| Feature | Description | Real-World Example |
|---------|-------------|-------------------|
| **Context Retention** | Remembers information across long conversations | Customer service chat maintaining issue history |
| **Complex Queries** | Breaks down multifaceted problems into digestible components | Explaining quantum computing step-by-step |
| **Multilingual Support** | Improved performance across multiple languages | Accurate French, Spanish, Chinese translations |
| **Reduced Bias** | Works to minimize biases and provide neutral answers | Fact-based responses on sensitive topics |
| **Code Understanding** | Multiple programming languages support | Debugging, code review, generation |

## Diverse Applications

:::feature-list
:::feature[Business Intelligence]
GPT-4 aids trend prediction, pattern recognition, and strategic forecasting, making data-driven insights more accessible and actionable for decision-makers.
:::feature[Healthcare Support]
Assists in providing medical information, referencing latest research, and helping create patient-friendly explanations of complex procedures.
:::feature[Education & Tutoring]
Delivers clear, logically structured explanations for complex academic topics, adapting to different learning levels and styles.
:::feature[Content Creation]
Generates marketing content, blog posts, creative writing, and more while maintaining brand voice and target audience alignment.
:::end-list

## Prompting Strategies for GPT-4

:::info
**System Prompts**
Set the overall behavior and role:
"You are a helpful assistant specializing in data analysis. Provide concise, accurate responses with relevant examples."

**Temperature Settings**
- **Lower (0-0.3)**: More focused, deterministic responses for factual tasks
- **Medium (0.4-0.7)**: Balanced creativity for general use
- **Higher (0.8-1.0)**: More creative, varied outputs for brainstorming
:::

## Current Limitations

:::warning
Important Limitations to Consider:
- **Knowledge Cutoff**: Training data has a cutoff date; cannot access real-time information
- **Hallucinations**: May produce plausible-sounding but incorrect information
- **Mathematical Precision**: Limited accuracy for complex calculations
- **No Code Execution**: Cannot run code directly, only generate and analyze it
- **No Internet Access**: Cannot browse web or access external databases
:::

## Best Practices for GPT-4

:::timeline
:::event[1][Start with Clear Objectives]
Define what you want to achieve before crafting your prompt. Clarity leads to better results.
:::event[2][Be Explicit About Format]
Specify exactly how you want the output structured—bullet points, paragraphs, tables, etc.
:::event[3][Use Examples for Complex Tasks]
Provide sample inputs and outputs to guide the model's understanding of your requirements.
:::event[4][Iterate and Refine]
Don't expect perfection on the first try. Analyze outputs and adjust your prompts accordingly.
:::event[5][Verify Important Information]
Always fact-check critical information, especially for medical, legal, or financial content.
:::end-timeline

:::tip
GPT-4's scalability and adaptability enable businesses to optimize workflows, improve efficiency, and make more informed decisions. Understanding its capabilities and limitations is key to leveraging its full potential.
:::
        `,
      },
      {
        id: 'prompting-across-sectors',
        title: 'Use-case: Prompting Techniques Across Sectors',
        objectives: [
          'Apply prompt engineering techniques to solve industry-specific challenges',
          'Learn sector-specific prompting strategies for healthcare, education, business, and more',
          'Understand the significance of tailored prompts for different domains',
          'Practice creating effective prompts for real-world scenarios',
        ],
        content: `
## Prompt Engineering Across Industries

:::key-concept[Industry Applications]
Different sectors have unique requirements for AI prompting. Understanding sector-specific needs enables you to craft prompts that generate highly relevant, accurate, and actionable outputs tailored to each domain.
:::

## Healthcare Applications

:::card-grid
:::card[heart][Personalized Treatment Plans]
Use specific prompts to generate AI-driven recommendations based on patient data, medical history, and diagnostic results for individualized care.
:::card[database][Medical Research]
Open-ended prompts explore new drug formulations or treatment methods by leveraging vast medical databases and literature to accelerate research.
:::end-grid

:::info
**Healthcare Prompt Example:**
"Create a personalized treatment plan for a patient with Type 2 diabetes, considering their medical history, current medications, blood sugar levels, and lifestyle factors. Include dietary recommendations and exercise guidelines."
:::

## Education Applications

:::card-grid
:::card[book][Adaptive Learning]
Specific prompts tailor educational content to learner needs, enhancing engagement with customized exercises and feedback based on learning styles.
:::card[check][Knowledge Assessment]
Structured prompts create quizzes and assessments aligned with educational objectives, ensuring thorough evaluations of student performance.
:::end-grid

:::info
**Education Prompt Example:**
"Create a quiz with 5 multiple-choice questions on climate change, with increasing difficulty levels. Include immediate feedback explaining why each answer is correct or incorrect."
:::

## Business & Marketing Applications

:::card-grid
:::card[chart][Customer Insights]
Specific prompts analyze customer feedback, reviews, and behavior data to generate insights for improving products, services, and marketing strategies.
:::card[chat][Content Creation]
Open-ended prompts generate creative marketing materials, blog posts, and social media content that resonates with target audiences.
:::end-grid

:::info
**Business Prompt Example:**
"Summarize the key customer feedback trends from these reviews. Highlight common issues and feature requests to guide product improvement. Format as a prioritized list with action items."
:::

## Finance Applications

:::card-grid
:::card[shield][Risk Analysis]
Structured prompts guide AI in extracting and analyzing financial data, helping identify potential risks, investment opportunities, and market trends.
:::card[cog][Fraud Detection]
Specific prompts enable AI to analyze transaction patterns and flag suspicious activities for real-time fraud prevention.
:::end-grid

:::info
**Finance Prompt Example:**
"Analyze the following financial data and identify potential risks. Present findings in a table with columns for Risk Factor, Likelihood (High/Medium/Low), Potential Impact, and Recommended Mitigation Strategy."
:::

## Creative Industries Applications

:::card-grid
:::card[star][Content Generation]
Open-ended prompts unlock creativity, allowing AI to generate artwork concepts, designs, or stories based on user input and creative direction.
:::card[robot][Game Design]
Specific prompts generate game design elements such as character dialogue, plot ideas, or narrative arcs for engaging player experiences.
:::end-grid

:::info
**Creative Prompt Example:**
"Write a 30-second script for a commercial promoting a new AI-powered health app. Highlight its key features: real-time health monitoring, personalized recommendations, and 24/7 AI chat support. Tone: friendly and inspiring."
:::

## Customer Service Applications

:::card-grid
:::card[chat][Intelligent Chatbots]
Well-structured prompts guide AI chatbots in delivering personalized and contextually accurate responses to customer inquiries.
:::card[cog][Automated Troubleshooting]
Specific prompts guide AI systems in diagnosing technical issues based on user input, enabling faster resolution.
:::end-grid

:::info
**Customer Service Prompt Example:**
"Write an automated response for a customer inquiring about the return policy for a defective product. Include clear instructions, expected timeline, and next steps. Tone: helpful and empathetic."
:::

## Cross-Industry Best Practices

| Practice | Description |
|----------|-------------|
| **Domain Terminology** | Use industry-specific language and jargon appropriately |
| **Compliance Awareness** | Include regulatory requirements (HIPAA, GDPR, etc.) where applicable |
| **Context Setting** | Provide relevant background about the industry and use case |
| **Output Specification** | Define exactly what format and structure you need |
| **Quality Standards** | Specify accuracy requirements and verification needs |

:::tip
The key to effective sector-specific prompting is understanding both the domain's unique requirements and AI's capabilities. Always adapt prompts to include relevant terminology, compliance considerations, and output formats specific to each industry.
:::
        `,
      },
    ],
    labs: [
      {
        id: 'exploring-chatgpt-principles',
        title: 'Exploring ChatGPT\'s 5 Key Principles',
        description: 'Practice the five key prompting principles: Giving Direction, Formatting Responses, Providing Examples, Evaluating Quality, and Dividing Labor.',
        objectives: [
          'Apply the five key prompting principles in ChatGPT',
          'Practice giving clear direction to AI models',
          'Learn to format responses for specific needs',
          'Evaluate AI output quality and refine prompts',
        ],
        tools: [
          { name: 'ChatGPT', url: 'https://chat.openai.com', type: 'ai-assistant' },
        ],
        content: `
## Lab Overview

In this hands-on lab, you'll practice the five key principles of effective prompting using ChatGPT.

## The Five Principles

:::card-grid
:::card[chat][Giving Direction]
Create clear prompts that guide AI in producing desired outcomes for various tasks.
:::card[book][Formatting Responses]
Design prompts that guide AI to format responses in specific structures (bullet points, tables, paragraphs).
:::card[star][Providing Examples]
Include examples in prompts to help AI understand context and generate more accurate responses.
:::card[check][Evaluating Quality]
Assess AI-generated responses based on clarity, relevance, accuracy, and coherence.
:::end-grid

## Exercise 1: Giving Direction

**Step 1:** Open ChatGPT in your browser

**Step 2:** Try these prompts and observe the difference in outputs:

**Weak Prompt:**
"Write about AI"

**Strong Prompt:**
"Write a 500-word blog post outlining the benefits of AI in education, focusing on personalized learning, adaptive learning platforms, and real-time feedback for students."

**Try These Variations:**
- "Using this advice, can I have a list of product names for a pair of shoes that can fit any foot size?"
- "Rose flower, painted in the style of Van Gogh"
- "Give me exercises for leg pain for people over 50 years old"

## Exercise 2: Formatting Responses

**Task:** Get AI to format information in different ways

**Prompt for Bullet Points:**
"Summarize the top five benefits of using AI in customer service. Format your response in bullet points and ensure each benefit is clearly explained."

**Prompt for Table Format:**
"Compare supervised learning and unsupervised learning. Present as a table with columns for: Aspect, Supervised Learning, Unsupervised Learning."

**Prompt for Numbered Steps:**
"Explain how to create an effective prompt. Present as numbered steps from 1-5."

## Exercise 3: Providing Examples

**Task:** Use examples to guide AI output

**Without Example:**
"Write a product description"

**With Example:**
"Write a product description for a new eco-friendly water bottle. For example, consider highlighting its environmental benefits like 'Made from 100% recycled materials' and practical features like 'Keeps drinks cold for 24 hours'."

## Exercise 4: Evaluating Quality

**Task:** Evaluate and improve AI responses

**Step 1:** Submit this prompt:
"Describe the impact of climate change on agriculture"

**Step 2:** Evaluate the response:
- Did it cover environmental impacts?
- Did it include economic impacts?
- Was the information accurate and relevant?

**Step 3:** Refine the prompt:
"Describe the impact of climate change on agriculture. Include both environmental effects (drought, flooding) and economic consequences (crop prices, farmer income). Provide specific examples from different regions."

## Exercise 5: Dividing Labor

**Task:** Break complex tasks into components

**Complex Task:** Analyze an article about AI in education

**Divided Approach:**
"First, summarize the main points of the article on AI in education. Then, analyze the data presented in the article to highlight trends and key insights. Please ensure to separate the summary and analysis into distinct sections."

## Reflection Questions

1. How did the specificity of your prompts affect the quality of outputs?
2. Which formatting technique was most effective for your use case?
3. How did providing examples change the AI's responses?
4. What patterns did you notice when evaluating quality?
        `,
      },
      {
        id: 'ai-prompting-efficiency',
        title: 'AI Prompting Efficiency',
        description: 'Discover how GPT-4 transforms industries with practical demonstrations in business, healthcare, education, and creative sectors.',
        objectives: [
          'Apply prompt engineering to real-world industry scenarios',
          'Generate business insights using customer review analysis',
          'Create healthcare-related content with appropriate prompts',
          'Develop educational materials using adaptive learning prompts',
        ],
        tools: [
          { name: 'ChatGPT', url: 'https://chat.openai.com', type: 'ai-assistant' },
        ],
        content: `
## Lab Overview

In this lab, you'll explore how GPT-4 and similar AI models transform different industries through effective prompting.

## Exercise 1: Transforming Business

**Scenario:** You're a product manager who needs to analyze customer reviews.

**Task:** Analyze customer reviews to identify key trends for improving a product.

**Prompt:**
"Summarize the key customer feedback trends from the reviews. Highlight common issues and feature requests to guide product improvement."

**Follow-up Prompt:**
"Based on these trends, create a prioritized list of product improvements with estimated impact (High/Medium/Low) and suggested timelines."

## Exercise 2: Transforming Healthcare

**Scenario:** You're helping create patient education materials.

**Task:** Generate a personalized communication for a patient.

**Prompt:**
"Create a personalized treatment plan summary for a patient with diabetes, considering their medical history and current health status. Use patient-friendly language and include:
1. Type of Diabetes (Type 2)
2. Dietary recommendations
3. Exercise guidelines
4. Medication reminders
5. When to contact their doctor"

:::warning
Note: This is for educational purposes only. Always consult healthcare professionals for actual medical advice.
:::

## Exercise 3: Transforming Education

**Scenario:** You're an educator creating adaptive learning content.

**Task:** Generate quiz questions with feedback.

**Prompt:**
"Create a quiz with 5 multiple-choice questions on climate change, with increasing difficulty levels and immediate feedback for each question. Include:
- Question text
- Four answer options (A, B, C, D)
- Correct answer
- Explanation of why the answer is correct"

## Exercise 4: Transforming Creative Industries

**Scenario:** You're a marketing professional creating ad content.

**Task:** Create a script for a short advertisement.

**Prompt:**
"Write a 30-second script for a commercial promoting a new AI-powered health app, highlighting its features and benefits. Include:
- Opening hook
- Key features (real-time monitoring, personalized recommendations, AI chat support)
- Call to action
- Closing tagline"

## Exercise 5: Transforming Customer Service

**Scenario:** You're setting up automated customer support.

**Task:** Generate an automated response for a common inquiry.

**Prompt:**
"Write an automated response for a customer inquiring about the return policy for a defective product. Include:
- Acknowledgment of the issue
- Clear return instructions
- Expected timeline
- Contact information for additional help
- Empathetic and helpful tone"

## Challenge: Cross-Industry Application

**Task:** Choose an industry you're interested in and create three prompts that would help solve a real problem in that field.

**Template:**
1. **Industry:** [Your chosen industry]
2. **Problem:** [Specific challenge to solve]
3. **Prompt 1:** [Information gathering prompt]
4. **Prompt 2:** [Analysis prompt]
5. **Prompt 3:** [Action/solution prompt]

## Reflection

After completing the exercises, consider:
- Which industry application was most effective?
- How did specificity affect the quality of outputs?
- What patterns can you apply to your own work?
        `,
      },
    ],
    quiz: [
      {
        id: 'q2-1',
        question: 'What is prompt engineering?',
        options: [
          'Writing computer code for AI systems',
          'Designing and refining inputs to guide AI models in generating desired outputs',
          'Building hardware for AI applications',
          'Training AI models from scratch',
        ],
        correctAnswer: 1,
      },
      {
        id: 'q2-2',
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
        id: 'q2-3',
        question: 'Which prompt pattern involves providing the AI with a role to assume?',
        options: [
          'The Template Pattern',
          'The Few-Shot Pattern',
          'The Persona Pattern',
          'The Chain of Thought Pattern',
        ],
        correctAnswer: 2,
      },
      {
        id: 'q2-4',
        question: 'What is a key benefit of effective prompt engineering?',
        options: [
          'It makes AI models run faster',
          'It reduces bias and errors by guiding AI with clear expectations',
          'It eliminates the need for AI training',
          'It allows AI to access the internet',
        ],
        correctAnswer: 1,
      },
      {
        id: 'q2-5',
        question: 'What is iterative refinement in prompt engineering?',
        options: [
          'Writing the longest possible prompt',
          'Drafting, testing, analyzing, and refining prompts until optimal results are achieved',
          'Using the same prompt repeatedly',
          'Avoiding any changes to initial prompts',
        ],
        correctAnswer: 1,
      },
      {
        id: 'q2-6',
        question: 'Which GPT-4 feature allows it to maintain coherent long conversations?',
        options: [
          'Reduced bias',
          'Enhanced context understanding',
          'Multimodal processing',
          'Code execution',
        ],
        correctAnswer: 1,
      },
      {
        id: 'q2-7',
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
        id: 'q2-8',
        question: 'Which is an example of improving a weak prompt?',
        options: [
          'Changing "Write about cats" to "Write something"',
          'Removing all context from the prompt',
          'Changing "Summarize this" to "Provide a 3-bullet summary of key points for executives"',
          'Making the prompt longer without adding specific details',
        ],
        correctAnswer: 2,
      },
      {
        id: 'q2-9',
        question: 'What is a current limitation of GPT-4?',
        options: [
          'Cannot understand multiple languages',
          'Cannot generate any code',
          'Has a knowledge cutoff date and may produce plausible but incorrect information',
          'Can only respond with one sentence at a time',
        ],
        correctAnswer: 2,
      },
      {
        id: 'q2-10',
        question: 'In healthcare prompting, why is it important to include compliance considerations?',
        options: [
          'To make prompts longer',
          'To ensure outputs adhere to regulations like HIPAA and protect patient privacy',
          'To confuse the AI model',
          'Compliance has no relevance to prompting',
        ],
        correctAnswer: 1,
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

export function getModuleLabs(moduleId: string): Lab[] | undefined {
  return getModule(moduleId)?.labs
}

export function getLab(moduleId: string, labId: string): Lab | undefined {
  const module = getModule(moduleId)
  return module?.labs?.find((l) => l.id === labId)
}
