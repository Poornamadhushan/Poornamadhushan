export const CATEGORIES = [
  { id: 'ml', label: 'Machine Learning', icon: '🤖' },
  { id: 'dl', label: 'Deep Learning', icon: '🧠' },
  { id: 'nlp', label: 'NLP', icon: '💬' },
  { id: 'cv', label: 'Computer Vision', icon: '👁️' },
  { id: 'da', label: 'Data Analysis', icon: '📊' },
  { id: 'rl', label: 'Reinforcement Learning', icon: '🎮' },
];

export const YEARS = [2024, 2023, 2022, 2021, 2020];

export const DEPARTMENTS = [
  'Computer Science',
  'Information Technology',
  'Electrical Engineering',
  'Data Science',
  'Artificial Intelligence',
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Sentiment Analysis of Social Media Posts',
    shortDescription:
      'A deep learning model that analyzes sentiment in real-time Twitter and Reddit posts using BERT transformers.',
    description:
      'This project implements a state-of-the-art sentiment analysis pipeline using pre-trained BERT transformers fine-tuned on a custom social media dataset. The system processes tweets and Reddit posts in real-time, classifying them as positive, negative, or neutral with 94% accuracy. The pipeline includes data preprocessing, model fine-tuning, and a REST API for easy integration.\n\nThe dataset consists of 500,000 labeled social media posts collected over 12 months. The model achieves superior performance compared to traditional machine learning approaches like SVM and Naive Bayes, particularly for sarcasm and context-dependent sentiment.',
    category: 'nlp',
    author: 'Kasun Perera',
    department: 'Computer Science',
    year: 2024,
    tags: ['NLP', 'BERT', 'Sentiment Analysis', 'Python', 'Deep Learning'],
    githubUrl: 'https://github.com/example/sentiment-analysis',
    datasetUrl: 'https://kaggle.com/example/dataset',
    reportUrl: '#',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80',
    ],
    featured: true,
    status: 'published',
    submittedBy: 'student1',
  },
  {
    id: 2,
    title: 'Real-Time Object Detection for Autonomous Vehicles',
    shortDescription:
      'YOLOv8-based object detection system achieving 60fps on edge devices for autonomous driving scenarios.',
    description:
      'This research project implements a highly optimized object detection pipeline using YOLOv8 architecture, specifically designed for autonomous vehicle applications. The system detects pedestrians, vehicles, traffic signs, and road markings at 60 frames per second on NVIDIA Jetson Nano edge devices.\n\nKey innovations include custom anchor box optimization for traffic scenarios, multi-scale feature fusion, and a novel post-processing algorithm that reduces false positives by 35%. The model was trained on a combination of KITTI and COCO datasets with additional custom annotations for Sri Lankan traffic conditions.',
    category: 'cv',
    author: 'Naduni Silva',
    department: 'Electrical Engineering',
    year: 2024,
    tags: ['Computer Vision', 'YOLO', 'Object Detection', 'Edge AI', 'PyTorch'],
    githubUrl: 'https://github.com/example/yolo-autonomous',
    datasetUrl: 'https://kaggle.com/example/kitti',
    reportUrl: '#',
    screenshots: [
      'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    ],
    featured: true,
    status: 'published',
    submittedBy: 'student2',
  },
  {
    id: 3,
    title: 'Predictive Maintenance Using LSTM Networks',
    shortDescription:
      'LSTM-based time series prediction for industrial equipment failure detection with 96% accuracy.',
    description:
      "This project develops a predictive maintenance system for industrial machinery using Long Short-Term Memory (LSTM) neural networks. By analyzing sensor data streams from vibration, temperature, and pressure sensors, the model predicts equipment failures up to 72 hours in advance.\n\nThe system was deployed in a manufacturing plant and reduced unexpected downtime by 67%. The pipeline includes data ingestion from IoT sensors, real-time anomaly detection, and an alert system integrated with the plant's maintenance workflow.",
    category: 'ml',
    author: 'Dinesh Jayawardena',
    department: 'Electrical Engineering',
    year: 2023,
    tags: ['LSTM', 'Time Series', 'IoT', 'Predictive Maintenance', 'TensorFlow'],
    githubUrl: 'https://github.com/example/predictive-maintenance',
    datasetUrl: '#',
    reportUrl: '#',
    screenshots: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    ],
    featured: true,
    status: 'published',
    submittedBy: 'student3',
  },
  {
    id: 4,
    title: 'Medical Image Segmentation with U-Net',
    shortDescription:
      'Automated tumor segmentation in MRI scans using U-Net architecture with 92% Dice coefficient.',
    description:
      'A deep learning solution for automated brain tumor segmentation in MRI images using a modified U-Net architecture with attention gates. The model processes FLAIR, T1, T1ce, and T2 MRI modalities to produce precise tumor segmentation masks.\n\nTrained on the BraTS 2023 dataset, the model achieves a Dice coefficient of 0.92 for whole tumor segmentation. The system includes a web interface for radiologists to upload DICOM files and receive segmentation results within seconds.',
    category: 'cv',
    author: 'Amali Fernando',
    department: 'Information Technology',
    year: 2024,
    tags: ['Medical Imaging', 'U-Net', 'Segmentation', 'MRI', 'PyTorch'],
    githubUrl: 'https://github.com/example/medical-segmentation',
    datasetUrl: 'https://kaggle.com/example/brats',
    reportUrl: '#',
    screenshots: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    ],
    featured: false,
    status: 'published',
    submittedBy: 'student4',
  },
  {
    id: 5,
    title: 'Sinhala Language Chatbot with Transformer',
    shortDescription:
      'First open-source conversational AI chatbot for the Sinhala language using custom transformer architecture.',
    description:
      'This pioneering project develops the first publicly available conversational AI system for the Sinhala language. The system uses a custom transformer architecture trained on a curated dataset of 2 million Sinhala text samples scraped from news websites, social media, and books.\n\nThe chatbot supports intent recognition, entity extraction, and multi-turn conversation in Sinhala script. It also handles code-switching between Sinhala and English, a common pattern in Sri Lankan digital communication.',
    category: 'nlp',
    author: 'Tharaka Bandara',
    department: 'Computer Science',
    year: 2023,
    tags: ['NLP', 'Chatbot', 'Sinhala', 'Transformer', 'Low-resource NLP'],
    githubUrl: 'https://github.com/example/sinhala-chatbot',
    datasetUrl: '#',
    reportUrl: '#',
    screenshots: [
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
    ],
    featured: false,
    status: 'published',
    submittedBy: 'student5',
  },
  {
    id: 6,
    title: 'Stock Market Prediction with Ensemble Methods',
    shortDescription:
      'Ensemble of GRU, LSTM, and XGBoost models for short-term stock price forecasting with technical indicators.',
    description:
      'This research explores the effectiveness of ensemble machine learning methods for predicting stock market prices in the Colombo Stock Exchange (CSE). The system combines GRU and LSTM neural networks with gradient boosting (XGBoost) to produce robust short-term price forecasts.\n\nThe model incorporates 47 technical indicators, sentiment scores from financial news, and macroeconomic indicators. Backtesting over 5 years of CSE data shows 15% better performance than buy-and-hold strategies.',
    category: 'ml',
    author: 'Ruwan Dissanayake',
    department: 'Data Science',
    year: 2023,
    tags: ['Machine Learning', 'Stock Market', 'GRU', 'XGBoost', 'Finance'],
    githubUrl: 'https://github.com/example/stock-prediction',
    datasetUrl: '#',
    reportUrl: '#',
    screenshots: [
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    ],
    featured: false,
    status: 'published',
    submittedBy: 'student6',
  },
  {
    id: 7,
    title: 'Reinforcement Learning for Traffic Signal Control',
    shortDescription:
      'Multi-agent deep Q-network that optimizes traffic signal timing and reduces average wait times by 40%.',
    description:
      'This project applies multi-agent reinforcement learning to optimize traffic signal control in urban intersections. Using Deep Q-Networks (DQN) with experience replay, the system learns optimal signal timing policies from traffic simulation data.\n\nThe agents are trained in SUMO traffic simulator and evaluated on real intersection topologies from Colombo city. The system reduces average vehicle wait times by 40% and vehicle emissions by 28% compared to fixed-time signal controllers.',
    category: 'rl',
    author: 'Sachini Wickramasinghe',
    department: 'Artificial Intelligence',
    year: 2022,
    tags: ['Reinforcement Learning', 'DQN', 'Traffic', 'Multi-agent', 'Python'],
    githubUrl: 'https://github.com/example/traffic-rl',
    datasetUrl: '#',
    reportUrl: '#',
    screenshots: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
    ],
    featured: false,
    status: 'published',
    submittedBy: 'student7',
  },
  {
    id: 8,
    title: 'Customer Churn Prediction for Telecom',
    shortDescription:
      'XGBoost and SHAP-based churn prediction model with explainable AI features for telecom operators.',
    description:
      'This project builds an explainable customer churn prediction system for telecommunications companies. The model uses XGBoost with SHAP (SHapley Additive exPlanations) values to provide transparent predictions that customer retention teams can act upon.\n\nTrained on anonymized data from a major Sri Lankan telecom operator, the model achieves 89% AUC-ROC. The SHAP analysis revealed the top churn drivers: network quality complaints, billing disputes, and competitor promotions.',
    category: 'da',
    author: 'Malith Gunasekara',
    department: 'Data Science',
    year: 2022,
    tags: ['XGBoost', 'SHAP', 'Explainable AI', 'Churn Prediction', 'Telecom'],
    githubUrl: 'https://github.com/example/churn-prediction',
    datasetUrl: '#',
    reportUrl: '#',
    screenshots: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    ],
    featured: false,
    status: 'published',
    submittedBy: 'student8',
  },
  {
    id: 9,
    title: 'Generative Adversarial Network for Art Synthesis',
    shortDescription:
      'StyleGAN2-based model trained on traditional Sri Lankan art to generate novel artwork in traditional styles.',
    description:
      'This creative AI project uses a fine-tuned StyleGAN2 architecture to generate novel artworks inspired by traditional Sri Lankan painting styles, including Kandyan, Sigiriya fresco, and Dumbara weaving patterns.\n\nThe model was trained on a custom dataset of 10,000 digitized traditional artworks collected from museums and art archives. The project includes a web gallery where users can generate and download AI-created artworks.',
    category: 'dl',
    author: 'Priya Chandrasekhar',
    department: 'Computer Science',
    year: 2024,
    tags: ['GAN', 'StyleGAN2', 'Generative AI', 'Art', 'Deep Learning'],
    githubUrl: 'https://github.com/example/art-gan',
    datasetUrl: '#',
    reportUrl: '#',
    screenshots: [
      'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80',
    ],
    featured: true,
    status: 'published',
    submittedBy: 'student9',
  },
  {
    id: 10,
    title: 'Plant Disease Detection using CNN',
    shortDescription:
      'MobileNetV3-based mobile app that identifies 38 plant diseases from leaf photographs with 95% accuracy.',
    description:
      'This project develops a lightweight convolutional neural network for real-time plant disease detection on mobile devices. Using transfer learning with MobileNetV3, the model identifies 38 different plant diseases across 14 crop species from smartphone photographs.\n\nThe model is optimized for on-device inference using TensorFlow Lite, achieving sub-second inference time on mid-range Android devices. A React Native app provides an intuitive interface for farmers to diagnose crop diseases in the field.',
    category: 'cv',
    author: 'Ishara Rajapaksha',
    department: 'Information Technology',
    year: 2023,
    tags: ['CNN', 'Mobile AI', 'Plant Disease', 'TFLite', 'Agriculture'],
    githubUrl: 'https://github.com/example/plant-disease',
    datasetUrl: 'https://kaggle.com/example/plant-village',
    reportUrl: '#',
    screenshots: [
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    ],
    featured: false,
    status: 'published',
    submittedBy: 'student10',
  },
  {
    id: 11,
    title: 'Fake News Detection with Graph Neural Networks',
    shortDescription:
      'Graph Neural Network that models information propagation patterns to detect fake news with 91% accuracy.',
    description:
      'This project addresses the growing challenge of misinformation by using Graph Neural Networks to analyze how news spreads across social networks. The model constructs propagation graphs from retweet and share patterns to distinguish fake news from authentic articles.\n\nThe approach outperforms text-only baselines by leveraging both content features and network structure. Evaluated on FakeNewsNet and a custom Sinhala fake news dataset.',
    category: 'nlp',
    author: 'Chathuranga Liyanage',
    department: 'Computer Science',
    year: 2024,
    tags: ['GNN', 'Fake News', 'Graph Networks', 'Misinformation', 'NLP'],
    githubUrl: 'https://github.com/example/fake-news-gnn',
    datasetUrl: '#',
    reportUrl: '#',
    screenshots: [
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
    ],
    featured: false,
    status: 'published',
    submittedBy: 'student11',
  },
  {
    id: 12,
    title: 'Speech Emotion Recognition System',
    shortDescription:
      'Deep CNN-LSTM model for recognizing 8 emotions from speech audio with 87% accuracy across multiple languages.',
    description:
      'This project develops a multi-lingual speech emotion recognition system using a hybrid CNN-LSTM architecture. The model processes raw audio waveforms and mel-frequency cepstral coefficients (MFCCs) to identify eight emotions: happy, sad, angry, fearful, disgusted, surprised, neutral, and calm.\n\nThe system supports English, Sinhala, and Tamil speech, making it valuable for call center quality monitoring and mental health applications in Sri Lanka.',
    category: 'dl',
    author: 'Vimuktha Senanayake',
    department: 'Artificial Intelligence',
    year: 2023,
    tags: ['Speech Processing', 'CNN-LSTM', 'Emotion AI', 'Audio', 'Deep Learning'],
    githubUrl: 'https://github.com/example/speech-emotion',
    datasetUrl: '#',
    reportUrl: '#',
    screenshots: [
      'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80',
    ],
    featured: false,
    status: 'published',
    submittedBy: 'student12',
  },
];

export const PENDING_PROJECTS = [
  {
    id: 101,
    title: 'Water Quality Prediction Using Machine Learning',
    shortDescription: 'ML model to predict water potability from chemical sensor data.',
    category: 'ml',
    author: 'Ravindra Kumara',
    department: 'Data Science',
    year: 2024,
    tags: ['Machine Learning', 'Environment', 'Water Quality'],
    status: 'pending',
    submittedBy: 'student13',
    submittedAt: '2024-03-10',
  },
  {
    id: 102,
    title: 'OCR for Handwritten Sinhala Text',
    shortDescription: 'Deep learning OCR system for handwritten Sinhala script recognition.',
    category: 'cv',
    author: 'Nimesha Jayasuriya',
    department: 'Computer Science',
    year: 2024,
    tags: ['OCR', 'Computer Vision', 'Sinhala', 'Deep Learning'],
    status: 'pending',
    submittedBy: 'student14',
    submittedAt: '2024-03-12',
  },
];

export const USERS = [
  { id: 'admin1', name: 'Admin User', email: 'admin@aresearch.lk', role: 'admin' },
  { id: 'student1', name: 'Kasun Perera', email: 'kasun@university.lk', role: 'student' },
  { id: 'student2', name: 'Naduni Silva', email: 'naduni@university.lk', role: 'student' },
  { id: 'student3', name: 'Dinesh Jayawardena', email: 'dinesh@university.lk', role: 'student' },
];
