![WhatsApp Image 2024-10-05 at 01 08 01_6a0927d9](https://github.com/user-attachments/assets/ed108f7d-506e-440d-ac56-fdef0d8fa0bd)


# HealthAI

## 📖 Description
*The HealthAI is an innovative web application designed to enhance healthcare accessibility through advanced AI technologies. It offers features such as **multi-lingual medical query support along with precription analysis, x-ray analysis, and a symptom-to-disease prediction** tool. The system leverages the Intel **GENAI** toolkit and integrates machine learning models for efficient, accurate healthcare assistance. With user authentication and a personalized experience, this tool aims to revolutionize how individuals seek medical advice and information.*

---

## 📚 Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
4. [Website](#installation-instructions)
6. [Optimizations](#optimizations)
8. [Acknowledgments](#acknowledgments)
11. [Future Work](#future-work)
12. [Screenshots/Demo](#screenshotsdemo)

---

## ✨ Features

Here are the features of **HealthAI** with even more concise descriptions:

- **Multi-lingual Medical Query Support:** Users can input queries in multiple languages and receive accurate responses through text and voice inputs.

- **Fracture Detection and Prediction:** HealthAI uses YOLOv8 to detect and predict fractures from medical images quickly and accurately.

- **Symptom-to-Disease Prediction Tool:** Users select symptoms, and the tool predicts potential illnesses using classifiers like SVC and Random Forest.

- **Prescription Analysis:** Tesseract and Llama 3.1 analyze prescriptions, extracting details and answering medication-related queries.

- **User Authentication:** A secure system allows users to create accounts and store medical inquiries, ensuring personalized experiences and data privacy.

---

## ⚙️ Technologies Used
Here’s the **Technologies Used** section for **HealthAI**, highlighting the key technologies and tools implemented in the project:

- **Intel GENAI Toolkit:** Utilized for developing AI models and enhancing performance in medical applications.
  
- **YOLOv8:** Employed for efficient fracture detection and prediction from medical images.

- **Llama 3.1:** Integrated for natural language processing and prescription analysis tasks.

- **Tesseract:** Used for optical character recognition (OCR) to extract text from prescription images.

- **Scikit-learn:** Leveraged for implementing machine learning algorithms like SVC, Random Forest, and Naive Bayes for symptom prediction.

- **Firebase:** Implemented for secure user authentication and data storage, ensuring scalability and privacy.

- **HTML/CSS/JavaScript/node.js:** Core technologies for building the web application’s user interface and interactivity.

- **Flask:** Utilized as the backend framework for handling API requests and serving the web application.

---

Here’s the **Website** section for **HealthAI**, where you can provide details about the website, including its purpose and any relevant links or instructions:

---

## 🌐 Website

The **HealthAI** web application serves as an accessible platform for users to interact with various healthcare features seamlessly. Designed with a user-friendly interface, it allows individuals to input medical queries, analyze symptoms, detect fractures, and gain insights into their prescriptions.

- **Live Demo:** [https://nodejs-server-wc8r.onrender.com/medicalquery]
- **Source Code:** [https://github.com/LokeshYarramallu/Project_oneAPI_hack_kpr]

### Getting Started
To explore the application:
1. Visit the website link.
2. Create an account or log in to access personalized features.
3. Use the navigation to explore various tools and functionalities.

---

Here’s a more concise **Optimizations** section that still emphasizes the role of the Intel GENAI Toolkit in enhancing **HealthAI**:

---

## ⚡ Optimizations

The **Intel GENAI Toolkit** significantly enhances the performance of the **HealthAI** application through several key optimizations:

- **Faster Model Training:** The toolkit utilizes optimized algorithms and Intel's multi-core processing capabilities, enabling quicker training of machine learning models and improved accuracy.

- **Real-time Inference:** With techniques like model quantization and pruning, the toolkit reduces model size while maintaining accuracy, allowing for rapid responses to user queries.

- **Multi-threading Support:** By enabling multi-threaded execution, HealthAI can perform multiple operations simultaneously, reducing wait times for complex tasks like image detection and query processing.

- **OpenVINO Integration:** The toolkit integrates with Intel OpenVINO, optimizing deep learning models for efficient deployment, particularly enhancing the speed of fracture detection with YOLOv8.

- **Performance Monitoring:** The toolkit includes tools for profiling and monitoring performance, helping developers identify bottlenecks and optimize resource usage effectively.

These optimizations ensure that **HealthAI** delivers fast, reliable, and accurate healthcare assistance to users.

---

## 🙏 Acknowledgments

- **Intel** for the GENAI Toolkit and OpenVINO.
- **Kaggle** for the bone fracture detection dataset [here](https://www.kaggle.com/datasets/pkdarabi/bone-fracture-detection-computer-vision-project) and dataset for [symptom to disease training data](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210826192554/Training.csv).
- **GitHub** for version control.
- **Open Source Community** including [Llama](https://groq.com/now-available-on-groq-the-largest-and-most-capable-openly-available-foundation-model-to-date-llama-3-1-405b/) and Groq for essential libraries and frameworks.
- **Team Members** for their hard work and collaboration:

  ![Lokesh Yarramallu](https://github.com/LokeshYarramallu.png?size=40) [@Lokesh Yarramallu](https://github.com/LokeshYarramallu)
    
  ![Madan Gopal](https://github.com/Madan2248c)
  
  ![Tarun Sudheer](https://github.com/0x-d15c0.png?size=40) [@Tarun Sudheer](https://github.com/0x-d15c0)
  
  ![Ajan S](https://github.com/ajan421)

---

## 🚀 Future Work

- **Enhanced User Interface:** Improve the UI/UX for better accessibility and user engagement.
- **Additional Languages:** Expand multi-lingual support to cover more languages for broader accessibility.
- **Integration with Telemedicine:** Develop features for virtual consultations and remote monitoring.
- **Advanced Diagnostics:** Incorporate more sophisticated diagnostic tools and algorithms for improved accuracy.
- **Mobile Application:** Create a mobile version of the application for on-the-go access to healthcare tools.
- **User Feedback Mechanism:** Implement a feedback system to gather user insights for continuous improvement.

---

## 📸 Screenshots/Demo

*Visuals of the application in action to give users a better understanding of the interface and functionalities.*

1. **Home Page Overview:**  
   ![Home Page](https://github.com/user-attachments/assets/08801aac-d301-4fdf-8f39-24193cbc0294)  
   The home page of **HealthAI**, featuring a clean, user-friendly interface for navigating the main features, including medical queries, symptom detection, and fracture analysis.

2. **Medical Query with Multi-Lingual Support:**  
   ![Medical Query](https://github.com/user-attachments/assets/07c5396d-ceed-4c98-99f1-7b4a36ca1824)  
   A demonstration of the system handling both text and voice input for medical queries in multiple languages, using Llama 3.1.

3. **Fracture Detection and Prediction:**  
   ![Fracture Detection](https://github.com/user-attachments/assets/816b2e74-261f-4815-8f64-4083241acf6d)  
   Example of the fracture detection interface, where the YOLOv8 model predicts fractures based on user-uploaded X-ray images.

4. **Symptom to Disease Prediction Tool:**  
   ![Symptom Prediction](https://github.com/user-attachments/assets/76f86be9-1689-4b25-a02b-8ca4dc3f559b)  
   Interface showing the tool where users input symptoms, and the system predicts possible diseases using SVC, Random Forest, and Naive Bayes classifiers.

5. **Prescription Analysis Tool:**  
   ![Prescription Analysis](https://github.com/user-attachments/assets/c180088b-ebdc-430f-a3e4-ee2caa699969)  
   Demonstration of the prescription analysis feature, which extracts and analyzes text from prescriptions using Tesseract and Llama 3.1.


## 🚀 Closing Thoughts

**HealthAI** is more than just a tool—it’s a step toward making healthcare more accessible, efficient, and intelligent. By leveraging cutting-edge technologies like Intel's GENAI Toolkit and OpenVINO, we've pushed the boundaries of what's possible in medical assistance. This is just the beginning.

We believe in the power of collaboration, innovation, and the endless potential of AI to transform lives. **HealthAI** stands as a testament to that belief, and we’re excited to see where it evolves from here.

Together, we are building the future of healthcare—one line of code at a time.
