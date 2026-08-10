export const questions = [

  // ─────────────────────────────────────────────
  // BEGINNER — Basic Java
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "Which of the following is the correct way to declare an integer variable in Java?",
    choices: ["Int x = 5;", "integer x = 5;", "x = 5;", "int x = 5;"],
    correct: 3,
    topic: "basic_java",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "In Java, the main method signature must be: public static void main(String[] args)",
    choices: ["True", "False"],
    correct: 0,
    topic: "basic_java",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "What is the result of: 10 % 3",
    choices: ["0", "1", "2", "3"],
    correct: 1,
    topic: "basic_java",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Complete the statement to print 'Hello World':\nSystem.out._____(\"Hello World\");",
    answer: "println",
    topic: "basic_java",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "Java is a compiled language, meaning source code is converted to bytecode before execution.",
    choices: ["True", "False"],
    correct: 0,
    topic: "basic_java",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "Which data type would you use to store the value 3.14?",
    choices: ["char", "int", "double", "boolean"],
    correct: 2,
    topic: "basic_java",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "What keyword is used to define a constant in Java?\n_____ double PI = 3.14159;",
    answer: "final",
    topic: "basic_java",
    difficulty: "beginner"
  },

  // ─────────────────────────────────────────────
  // BEGINNER — Conditionals
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "What will print?\nint x = 10;\nif (x > 5) {\n  System.out.println(\"A\");\n} else {\n  System.out.println(\"B\");\n}",
    choices: ["Nothing", "A", "B", "AB"],
    correct: 1,
    topic: "conditionals",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "In Java, an else-if block can only appear once in a single if-else chain.",
    choices: ["True", "False"],
    correct: 1,
    topic: "conditionals",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Complete the ternary operator:\nString result = (x > 0) _____ \"positive\" : \"non-positive\";",
    answer: "?",
    topic: "conditionals",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "Which operator checks both value AND type equality in Java?",
    choices: ["==", "equals()", ".compareTo()", "!="],
    correct: 0,
    topic: "conditionals",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "What keyword is used to handle multiple specific values of a variable more cleanly than many if-else blocks?",
    choices: ["match", "case", "select", "switch"],
    correct: 3,
    topic: "conditionals",
    difficulty: "beginner"
  },

  // ─────────────────────────────────────────────
  // BEGINNER — Arrays
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "Consider the array [2, 4, 6, 8, 10]. What is the size of the array?",
    choices: ["5", "4", "10", "2"],
    correct: 0,
    topic: "arrays",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "The first index of an array in Java is 1.",
    choices: ["True", "False"],
    correct: 1,
    topic: "arrays",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Print the 3rd element of arr[]:\nSystem.out.println( _____ );",
    answer: "arr[2]",
    topic: "arrays",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "How do you declare an integer array of size 5 in Java?",
    choices: ["int arr = new int[5];", "int[] arr = new int[5];", "int[] arr = int[5];", "array<int> arr = new array<int>(5);"],
    correct: 1,
    topic: "arrays",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Access the last element of an array called 'nums' with length n:\nnums[ _____ ]",
    answer: "n-1",
    topic: "arrays",
    difficulty: "beginner"
  },

  // ─────────────────────────────────────────────
  // BEGINNER — Loops
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "How many times does this loop execute?\nfor (int i = 0; i < 5; i++) {}",
    choices: ["4", "5", "6", "Infinite"],
    correct: 1,
    topic: "loops",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "A while loop will always execute its body at least once.",
    choices: ["True", "False"],
    correct: 1,
    topic: "loops",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Complete the for-each loop to iterate over an array:\nfor (int _____ : numbers) {}",
    answer: "num",
    topic: "loops",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "Which keyword immediately exits a loop in Java?",
    choices: ["exit", "stop", "break", "return"],
    correct: 2,
    topic: "loops",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "What type of loop guarantees the body runs at least once?",
    choices: ["for", "while", "for-each", "do-while",],
    correct: 3,
    topic: "loops",
    difficulty: "beginner"
  },

  // ─────────────────────────────────────────────
  // BEGINNER — I/O
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "Which class is used to read user input from the console in Java?",
    choices: ["Scanner", "BufferedReader", "InputReader", "Console"],
    correct: 0,
    topic: "io",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Import the Scanner class:\nimport java.util._____;",
    answer: "Scanner",
    topic: "io",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "System.out.print() and System.out.println() both add a newline after the output.",
    choices: ["True", "False"],
    correct: 1,
    topic: "io",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "What method reads an integer from a Scanner object called 'sc'?",
    choices: ["sc.readInt()", "sc.getInt()", "sc.parseInt()", "sc.nextInt()",],
    correct: 3,
    topic: "io",
    difficulty: "beginner"
  },

  // ─────────────────────────────────────────────
  // BEGINNER — Functions
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "What keyword is used to send a value back from a method?",
    choices: ["send", "return", "output", "yield"],
    correct: 1,
    topic: "functions",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "A method declared as void cannot return a value.",
    choices: ["True", "False"],
    correct: 0,
    topic: "functions",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Complete the method signature for a method that takes an int and returns an int:\npublic _____ square(int n) { return n * n; }",
    answer: "int",
    topic: "functions",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "What is method overloading?",
    choices: [
      "Multiple methods with the same name but different parameters",
      "A method that calls itself",
      "A method that overrides a parent method",
      "Using too many methods in a class"
    ],
    correct: 0,
    topic: "functions",
    difficulty: "beginner"
  },

  // ─────────────────────────────────────────────
  // BEGINNER — Elementary Sorts
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "What is the worst-case time complexity of Selection Sort?",
    choices: ["O(log n)", "O(n)", "O(n log n)", "O(n²)"],
    correct: 3,
    topic: "elementary_sorts",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "Selection Sort finds the minimum element and places it at the beginning on each pass.",
    choices: ["True", "False"],
    correct: 0,
    topic: "elementary_sorts",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "Which sort works by shifting elements to insert each new element in the correct position?",
    choices: ["Bubble Sort", "Insertion Sort", "Selection Sort", "Merge Sort"],
    correct: 1,
    topic: "elementary_sorts",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Bubble Sort compares _____ elements at a time and swaps them if they are in the wrong order.",
    answer: "adjacent",
    topic: "elementary_sorts",
    difficulty: "beginner"
  },

  // ─────────────────────────────────────────────
  // BEGINNER — OOP
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "What keyword creates a new instance of a class in Java?",
    choices: ["create", "make", "instantiate", "new"],
    correct: 3,
    topic: "oop",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "A constructor must have the same name as its class.",
    choices: ["True", "False"],
    correct: 0,
    topic: "oop",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "Which access modifier makes a field visible only within its own class?",
    choices: ["protected", "public", "private", "default"],
    correct: 2,
    topic: "oop",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Use the _____ keyword to refer to the current object inside a class.",
    answer: "this",
    topic: "oop",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "What are the four pillars of Object-Oriented Programming?",
    choices: [
      "Encapsulation, Inheritance, Polymorphism, Abstraction",
      "Classes, Objects, Methods, Variables",
      "Loops, Arrays, Functions, Classes",
      "Public, Private, Protected, Default"
    ],
    correct: 0,
    topic: "oop",
    difficulty: "beginner"
  },

  // ─────────────────────────────────────────────
  // INTERMEDIATE — OOP
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "Which keyword allows a subclass to inherit from a parent class in Java?",
    choices: ["extends", "implements", "inherits", "super"],
    correct: 0,
    topic: "oop",
    difficulty: "intermediate"
  },
  {
    type: "tf",
    question: "In Java, a class can extend multiple classes at once.",
    choices: ["True", "False"],
    correct: 1,
    topic: "oop",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "What is the key difference between an abstract class and an interface in Java?",
    choices: [
      "Interfaces can have constructors; abstract classes cannot",
      "Abstract classes support multiple inheritance; interfaces do not",
      "Abstract classes can have implemented methods; interfaces (pre-Java 8) cannot",
      "There is no meaningful difference"
    ],
    correct: 2,
    topic: "oop",
    difficulty: "intermediate"
  },
  {
    type: "fill",
    question: "To call a parent class constructor from a subclass, use the _____ keyword.",
    answer: "super",
    topic: "oop",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "What is method overriding?",
    choices: [
      "A subclass provides its own implementation of a method defined in the parent class",
      "Defining two methods with the same name in the same class",
      "Making a method that cannot be changed",
      "Hiding a method with a private modifier"
    ],
    correct: 0,
    topic: "oop",
    difficulty: "intermediate"
  },
  {
    type: "tf",
    question: "The @Override annotation is required in Java for a method to successfully override a parent method.",
    choices: ["True", "False"],
    correct: 1,
    topic: "oop",
    difficulty: "intermediate"
  },

  // ─────────────────────────────────────────────
  // INTERMEDIATE — Stacks & Queues
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "A Stack follows which ordering principle?",
    choices: ["FIFO (First In, First Out)", "LIFO (Last In, First Out)", "LILO", "Sorted order"],
    correct: 1,
    topic: "stacks_queues",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "A Queue follows which ordering principle?",
    choices: ["FIFO (First In, First Out)", "LIFO (Last In, First Out)", "Random", "Sorted"],
    correct: 0,
    topic: "stacks_queues",
    difficulty: "intermediate"
  },
  {
    type: "fill",
    question: "In Java, the Stack method to remove and return the top element is called _____().",
    answer: "pop",
    topic: "stacks_queues",
    difficulty: "intermediate"
  },
  {
    type: "tf",
    question: "A Deque (double-ended queue) allows insertion and removal from both ends.",
    choices: ["True", "False"],
    correct: 0,
    topic: "stacks_queues",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "Which Java interface is typically used to implement a Queue?",
    choices: ["Stack<E>", "List<E>", "Queue<E>", "Set<E>"],
    correct: 2,
    topic: "stacks_queues",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "What happens when you call pop() on an empty Stack in Java?",
    choices: ["Returns null", "Returns -1", "Returns 0", "EmptyStackException is thrown"],
    correct: 3,
    topic: "stacks_queues",
    difficulty: "intermediate"
  },

  // ─────────────────────────────────────────────
  // INTERMEDIATE — Linked Lists
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "What does each node in a singly linked list contain?",
    choices: [
      "A data value only",
      "A data value and references to both next and previous nodes",
      "An index and a data value",
      "A data value and a reference to the next node",
    ],
    correct: 3,
    topic: "linked_lists",
    difficulty: "intermediate"
  },
  {
    type: "tf",
    question: "Accessing the kth element of a linked list takes O(1) time.",
    choices: ["True", "False"],
    correct: 1,
    topic: "linked_lists",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "What is the time complexity of inserting a node at the head of a singly linked list?",
    choices: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correct: 0,
    topic: "linked_lists",
    difficulty: "intermediate"
  },
  {
    type: "fill",
    question: "The last node in a singly linked list has its next pointer set to _____.",
    answer: "null",
    topic: "linked_lists",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "Which type of linked list has nodes with pointers to both the next AND previous node?",
    choices: ["Singly Linked List", "Circular Linked List", "Doubly Linked List", "Skip List"],
    correct: 2,
    topic: "linked_lists",
    difficulty: "intermediate"
  },

  // ─────────────────────────────────────────────
  // INTERMEDIATE — HashMaps
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "What is the average time complexity of get() and put() in a Java HashMap?",
    choices: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correct: 0,
    topic: "hashmaps",
    difficulty: "intermediate"
  },
  {
    type: "tf",
    question: "A HashMap in Java allows duplicate keys.",
    choices: ["True", "False"],
    correct: 1,
    topic: "hashmaps",
    difficulty: "intermediate"
  },
  {
    type: "fill",
    question: "Retrieve the value for key \"age\" from a HashMap called map:\nmap._____(\"age\");",
    answer: "get",
    topic: "hashmaps",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "What happens when two keys produce the same hash code in a HashMap?",
    choices: [
      "The second key silently overwrites the first",
      "An exception is thrown",
      "A collision occurs; Java handles it with chaining or open addressing",
      "The map automatically doubles in size"
    ],
    correct: 2,
    topic: "hashmaps",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "Which method checks if a key exists in a Java HashMap?",
    choices: ["containsKey()", "hasKey()", "exists()", "keyExists()"],
    correct: 0,
    topic: "hashmaps",
    difficulty: "intermediate"
  },

  // ─────────────────────────────────────────────
  // ADVANCED — BST
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "In a Binary Search Tree, where are values smaller than the root stored?",
    choices: ["Left subtree", "Right subtree", "Both subtrees", "At leaf nodes only"],
    correct: 0,
    topic: "bst",
    difficulty: "advanced"
  },
  {
    type: "tf",
    question: "An in-order traversal of a BST visits nodes in sorted ascending order.",
    choices: ["True", "False"],
    correct: 0,
    topic: "bst",
    difficulty: "advanced"
  },
  {
    type: "mc",
    question: "What is the worst-case time complexity of search in an unbalanced BST?",
    choices: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correct: 2,
    topic: "bst",
    difficulty: "advanced"
  },
  {
    type: "fill",
    question: "Deleting a node with two children in a BST typically replaces it with its in-order _____ (the largest value in the left subtree).",
    answer: "predecessor",
    topic: "bst",
    difficulty: "advanced"
  },
  {
    type: "mc",
    question: "Which BST variant automatically utilizes red links and perfect black balance?",
    choices: ["AVL Tree", "Plain BST", "Binary Heap", "LLRB"],
    correct: 3,
    topic: "bst",
    difficulty: "advanced"
  },
  {
    type: "tf",
    question: "A complete binary tree is always a valid Binary Search Tree.",
    choices: ["True", "False"],
    correct: 1,
    topic: "bst",
    difficulty: "advanced"
  },

  // ─────────────────────────────────────────────
  // ADVANCED — Priority Queues
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "What data structure typically backs a Priority Queue?",
    choices: [ "Linked List", "Unsorted Array", "Heap", "BST"],
    correct: 2,
    topic: "priority_queues",
    difficulty: "advanced"
  },
  {
    type: "tf",
    question: "Java's PriorityQueue is a min-heap by default (smallest element has highest priority).",
    choices: ["True", "False"],
    correct: 0,
    topic: "priority_queues",
    difficulty: "advanced"
  },
  {
    type: "mc",
    question: "What is the time complexity of inserting into a binary heap-based Priority Queue?",
    choices: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correct: 1,
    topic: "priority_queues",
    difficulty: "advanced"
  },
  {
    type: "fill",
    question: "To create a max-heap PriorityQueue in Java, pass _____ as the comparator.",
    answer: "Collections.reverseOrder()",
    topic: "priority_queues",
    difficulty: "advanced"
  },
  {
    type: "mc",
    question: "An array that is sorted in decreasing order is what type of heap?",
    choices: ["min heap", "max heap", "great heap", "decreasing heap"],
    correct: 1,
    topic: "priority_queues",
    difficulty: "advanced"
  },

  // ─────────────────────────────────────────────
  // ADVANCED — Graphs
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "Which graph traversal uses a queue to visit nodes level by level?",
    choices: ["BFS (Breadth-First Search)", "DFS (Depth-First Search)", "Dijkstra's", "Prim's"],
    correct: 0,
    topic: "graphs",
    difficulty: "advanced"
  },
  {
    type: "tf",
    question: "A tree is a special case of a graph with no cycles and all nodes connected.",
    choices: ["True", "False"],
    correct: 0,
    topic: "graphs",
    difficulty: "advanced"
  },
  {
    type: "mc",
    question: "What is the space complexity of storing a graph as an adjacency matrix with V vertices?",
    choices: ["O(V + E)", "O(E)", "O(V log V)", "O(V²)",],
    correct: 3,
    topic: "graphs",
    difficulty: "advanced"
  },
  {
    type: "fill",
    question: "DFS (Depth-First Search) is typically implemented using a _____ (data structure).",
    answer: "stack",
    topic: "graphs",
    difficulty: "advanced"
  },
  {
    type: "mc",
    question: "Which algorithm finds the shortest path in a weighted graph with non-negative edge weights?",
    choices: ["BFS", "DFS", "Dijkstra's", "Bellman-Ford"],
    correct: 2,
    topic: "graphs",
    difficulty: "advanced"
  },
  {
    type: "tf",
    question: "An undirected graph with V vertices and V-1 edges that is connected is always a tree.",
    choices: ["True", "False"],
    correct: 0,
    topic: "graphs",
    difficulty: "advanced"
  },
  {
    type: "mc",
    question: "In a directed graph, what is a vertex with no outgoing edges called?",
    choices: ["Swim", "Sink", "Source", "Spot"],
    correct: 1,
    topic: "graphs",
    difficulty: "advanced"
  },

  // ─────────────────────────────────────────────
  // ADVANCED — More Involved OOP
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "What design pattern ensures only one instance of a class is ever created?",
    choices: ["Singleton", "Factory", "Observer", "Strategy"],
    correct: 0,
    topic: "oop",
    difficulty: "advanced"
  },
  {
    type: "tf",
    question: "In Java, a static inner class can access the instance variables of its outer class without an outer class instance.",
    choices: ["True", "False"],
    correct: 1,
    topic: "oop",
    difficulty: "advanced"
  },
  {
    type: "mc",
    question: "What does the Liskov Substitution Principle state?",
    choices: [
      "Objects of a subclass should be replaceable for objects of the parent class without breaking the program",
      "A class should only have one reason to change",
      "High-level modules should not depend on low-level modules",
      "Interfaces should be specific to each client's needs"
    ],
    correct: 0,
    topic: "oop",
    difficulty: "advanced"
  },
  {
    type: "fill",
    question: "The design principle 'program to an _____, not an implementation' encourages use of interfaces.",
    answer: "interface",
    topic: "oop",
    difficulty: "advanced"
  },
  {
    type: "mc",
    question: "Which keyword prevents a class from being subclassed in Java?",
    choices: ["final", "static", "abstract", "private"],
    correct: 0,
    topic: "oop",
    difficulty: "advanced"
  }

];