export const pythonQuestions = [

  // ─────────────────────────────────────────────
  // BEGINNER — Basic Python & Variables
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "Which of the following is the correct way to declare an integer variable in Python?",
    choices: ["int x = 5", "x := 5", "x = 5", "let x = 5"],
    correct: 2,
    topic: "basic_python",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "In Python, variables are dynamically typed, meaning you don't need to declare their type explicitly.",
    choices: ["True", "False"],
    correct: 0,
    topic: "basic_python",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "What is the result of: 10 % 3",
    choices: ["0", "1", "2", "3"],
    correct: 1,
    topic: "basic_python",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Complete the statement to print 'Hello World':\nprint(_____)",
    answer: "\"Hello World\"",
    topic: "basic_python",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "Python is a compiled language, meaning source code is converted to machine code before execution.",
    choices: ["True", "False"],
    correct: 1,
    topic: "basic_python",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "Which data type would you use to store the value 3.14?",
    choices: ["char", "int", "float", "bool"],
    correct: 2,
    topic: "basic_python",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "What keyword is used to define a constant in Python? (Note: Python doesn't have true constants, but by convention we use _____ case.)",
    answer: "UPPER",
    topic: "basic_python",
    difficulty: "beginner"
  },
  {
    "type": "mc",
    "question": "What is the output of the following code?\n\na = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)",
    "choices": ["[1, 2, 3]", "[1, 2, 3, 4]", "Error", "None"],
    "correct": 1,
    "topic": "basic_python",
    "difficulty": "beginner"
  },

  // ─────────────────────────────────────────────
  // BEGINNER — Conditionals
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "What will print?\nx = 10\nif x > 5:\n    print(\"A\")\nelse:\n    print(\"B\")",
    choices: ["Nothing", "A", "B", "AB"],
    correct: 1,
    topic: "conditionals",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "In Python, an elif block can appear multiple times in a single if-elif-else chain.",
    choices: ["True", "False"],
    correct: 0,
    topic: "conditionals",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Complete the ternary operator (conditional expression):\nresult = \"positive\" _____ x > 0 _____ \"non-positive\"",
    answer: "if, else",
    topic: "conditionals",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "Which operator checks for value equality in Python?",
    choices: ["=", "==", "===", "equals()"],
    correct: 1,
    topic: "conditionals",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "What keyword is used to handle multiple specific values of a variable more cleanly than many if-elif blocks? (Python 3.10+)",
    choices: ["match", "case", "switch", "select"],
    correct: 0,
    topic: "conditionals",
    difficulty: "beginner"
  },

  // ─────────────────────────────────────────────
  // BEGINNER — Lists & Tuples
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "Consider the list [2, 4, 6, 8, 10]. What is the length of the list?",
    choices: ["5", "4", "10", "2"],
    correct: 0,
    topic: "lists_tuples",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "The first index of a list in Python is 1.",
    choices: ["True", "False"],
    correct: 1,
    topic: "lists_tuples",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Print the 3rd element of list `arr`:\nprint(_____)",
    answer: "arr[2]",
    topic: "lists_tuples",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "What is the key difference between a list and a tuple in Python?",
    choices: ["Lists are faster", "Tuples are mutable, lists are immutable", "Lists are mutable, tuples are immutable", "Tuples can only store numbers"],
    correct: 2,
    topic: "lists_tuples",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Access the last element of a list called `nums`:\nnums[_____]",
    answer: "-1",
    topic: "lists_tuples",
    difficulty: "beginner"
  },

  // ─────────────────────────────────────────────
  // BEGINNER — Loops
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "How many times does this loop execute?\nfor i in range(5):\n    pass",
    choices: ["4", "5", "6", "Infinite"],
    correct: 1,
    topic: "loops",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "A while loop in Python will always execute its body at least once.",
    choices: ["True", "False"],
    correct: 1,
    topic: "loops",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Complete the loop to iterate over a list:\nfor _____ in numbers:\n    print(item)",
    answer: "item",
    topic: "loops",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "Which keyword immediately exits a loop in Python?",
    choices: ["exit", "stop", "break", "return"],
    correct: 2,
    topic: "loops",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "What is the output of the following code?\n\ni = 0\nwhile i < 3:\n    print(i, end=' ')\n    i += 1\nelse:\n    print('done')",
    choices: ["0 1 2", "0 1 2 done", "0 1 2 done done", "0 1 2 3 done"],
    correct: 1,
    topic: "loops",
    difficulty: "beginner"
  },

  // ─────────────────────────────────────────────
  // BEGINNER — I/O
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "Which function is used to read user input from the console in Python?",
    choices: ["scan()", "read()", "input()", "get()"],
    correct: 2,
    topic: "io",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Convert user input to an integer:\nx = int(_____())",
    answer: "input",
    topic: "io",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "print() and print('hello', end='') both add a newline after the output by default.",
    choices: ["True", "False"],
    correct: 1,
    topic: "io",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "What does the following code output?\n\nprint('Python', 'is', 'fun', sep='-')",
    choices: ["Python is fun", "Python-is-fun", "Pythonisfun", "Python,is,fun"],
    correct: 1,
    topic: "io",
    difficulty: "beginner"
  },

  // ─────────────────────────────────────────────
  // BEGINNER — Functions
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "What keyword is used to send a value back from a function in Python?",
    choices: ["send", "return", "output", "yield"],
    correct: 1,
    topic: "functions",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "A function that does not explicitly return a value in Python returns None.",
    choices: ["True", "False"],
    correct: 0,
    topic: "functions",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Complete the function signature for a function that takes an int and returns an int:\ndef _____(n):\n    return n * n",
    answer: "square",
    topic: "functions",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "What is the output?\n\ndef add(a, b=5):\n    return a + b\nprint(add(3))",
    choices: ["3", "5", "8", "Error"],
    correct: 2,
    topic: "functions",
    difficulty: "beginner"
  },

  // ─────────────────────────────────────────────
  // BEGINNER — Dictionaries
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "What is the correct way to create an empty dictionary in Python?",
    choices: ["{}", "[]", "()", "dict = {}"],
    correct: 0,
    topic: "dictionaries",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "Dictionary keys in Python must be unique and immutable.",
    choices: ["True", "False"],
    correct: 0,
    topic: "dictionaries",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Access the value for key 'age' in dictionary `person`:\nperson[_____]",
    answer: "'age'",
    topic: "dictionaries",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "What does the following code output?\n\nperson = {'name': 'Alice', 'age': 30}\nprint(person.get('city', 'Unknown'))",
    choices: ["None", "Error", "Unknown", "city"],
    correct: 2,
    topic: "dictionaries",
    difficulty: "beginner"
  },

  // ─────────────────────────────────────────────
  // INTERMEDIATE — Functions & Lambdas
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "What is the output of the following lambda expression?\n\nf = lambda x, y: x * y\nprint(f(3, 4))",
    choices: ["7", "12", "34", "<function>"],
    correct: 1,
    topic: "functions",
    difficulty: "intermediate"
  },
  {
    type: "tf",
    question: "Lambda functions in Python can contain multiple statements.",
    choices: ["True", "False"],
    correct: 1,
    topic: "functions",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "What does the `map()` function do?",
    choices: [
      "Creates a new list by filtering elements",
      "Applies a function to every item in an iterable",
      "Reduces an iterable to a single value",
      "Sorts an iterable"
    ],
    correct: 1,
    topic: "functions",
    difficulty: "intermediate"
  },
  {
    type: "fill",
    question: "Complete the list comprehension to create squares of numbers 0-4:\n[x**2 for x in _____(5)]",
    answer: "range",
    topic: "functions",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "What is the output?\n\nnums = [1, 2, 3, 4]\nresult = [x for x in nums if x % 2 == 0]\nprint(result)",
    choices: ["[1, 2, 3, 4]", "[2, 4]", "[1, 3]", "[]"],
    correct: 1,
    topic: "functions",
    difficulty: "intermediate"
  },

  // ─────────────────────────────────────────────
  // INTERMEDIATE — Lists & Tuples (Advanced Ops)
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "What is the time complexity of checking if an item exists in a Python list?",
    choices: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correct: 2,
    topic: "lists_tuples",
    difficulty: "intermediate"
  },
  {
    type: "tf",
    question: "Slicing a list in Python creates a shallow copy.",
    choices: ["True", "False"],
    correct: 0,
    topic: "lists_tuples",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "What does the following code output?\n\nmatrix = [[1, 2], [3, 4]]\nprint([row[1] for row in matrix])",
    choices: ["[1, 3]", "[2, 4]", "[[1, 2], [3, 4]]", "Error"],
    correct: 1,
    topic: "lists_tuples",
    difficulty: "intermediate"
  },
  {
    type: "fill",
    question: "Unpack the tuple into variables:\npoint = (10, 20)\nx, y = _____",
    answer: "point",
    topic: "lists_tuples",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "What is the output of this code?\n\na = [1, 2, 3]\nb = a[:]\nb[0] = 99\nprint(a)",
    choices: ["[99, 2, 3]", "[1, 2, 3]", "[99, 99, 99]", "Error"],
    correct: 1,
    topic: "lists_tuples",
    difficulty: "intermediate"
  },

  // ─────────────────────────────────────────────
  // INTERMEDIATE — Dictionaries & Sets
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "What is the average time complexity of get() and set() in a Python dictionary?",
    choices: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correct: 0,
    topic: "dictionaries",
    difficulty: "intermediate"
  },
  {
    type: "tf",
    question: "A Python dictionary allows duplicate keys.",
    choices: ["True", "False"],
    correct: 1,
    topic: "dictionaries",
    difficulty: "intermediate"
  },
  {
    type: "fill",
    question: "Merge two dictionaries (Python 3.9+):\ndict3 = dict1 | _____",
    answer: "dict2",
    topic: "dictionaries",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "What is the output?\n\ns = {1, 2, 3, 2, 1}\nprint(len(s))",
    choices: ["5", "3", "2", "Error"],
    correct: 1,
    topic: "dictionaries",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "Which method safely retrieves a value from a dictionary and removes the key?",
    choices: ["get()", "pop()", "remove()", "delete()"],
    correct: 1,
    topic: "dictionaries",
    difficulty: "intermediate"
  },

  // ─────────────────────────────────────────────
  // INTERMEDIATE — Loops & Iteration Tools
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "What does `enumerate()` do when used in a for loop?",
    choices: [
      "Sorts the iterable",
      "Returns index-value pairs",
      "Filters the iterable",
      "Reverses the iterable"
    ],
    correct: 1,
    topic: "loops",
    difficulty: "intermediate"
  },
  {
    type: "tf",
    question: "The `zip()` function in Python stops when the shortest input iterable is exhausted.",
    choices: ["True", "False"],
    correct: 0,
    topic: "loops",
    difficulty: "intermediate"
  },
  {
    type: "fill",
    question: "Loop through two lists simultaneously:\nfor a, b in _____(list1, list2):\n    print(a, b)",
    answer: "zip",
    topic: "loops",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "What is the output?\n\nfor i in range(3):\n    for j in range(2):\n        if i == j:\n            break\n    else:\n        print(i, end=' ')",
    choices: ["0 1 2", "1 2", "0 1", "1"],
    correct: 1,
    topic: "loops",
    difficulty: "intermediate"
  },

  // ─────────────────────────────────────────────
  // ADVANCED — Decorators & Closures
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "What is a decorator in Python?",
    choices: [
      "A function that modifies another function's behavior",
      "A design pattern for creating objects",
      "A way to declare class attributes",
      "A method for handling exceptions"
    ],
    correct: 0,
    topic: "advanced_python",
    difficulty: "advanced"
  },
  {
    type: "tf",
    question: "The `@staticmethod` decorator in Python creates a method that doesn't receive an implicit first argument (self or cls).",
    choices: ["True", "False"],
    correct: 0,
    topic: "advanced_python",
    difficulty: "advanced"
  },
  {
    type: "mc",
    question: "What does the following decorator output?\n\ndef uppercase(func):\n    def wrapper():\n        return func().upper()\n    return wrapper\n\n@uppercase\ndef greet():\n    return 'hello'\n\nprint(greet())",
    choices: ["hello", "HELLO", "Hello", "Error"],
    correct: 1,
    topic: "advanced_python",
    difficulty: "advanced"
  },
  {
    type: "fill",
    question: "Create a decorator that prints before and after a function runs:\n\ndef my_decorator(func):\n    def _____():\n        print('Before')\n        func()\n        print('After')\n    return wrapper",
    answer: "wrapper",
    topic: "advanced_python",
    difficulty: "advanced"
  },
  {
    type: "mc",
    question: "What is the output?\n\ndef outer(x):\n    def inner(y):\n        return x + y\n    return inner\n\nadd_five = outer(5)\nprint(add_five(3))",
    choices: ["5", "3", "8", "Error"],
    correct: 2,
    topic: "advanced_python",
    difficulty: "advanced"
  },

  // ─────────────────────────────────────────────
  // ADVANCED — Generators & Iterators
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "What keyword is used to create a generator in Python?",
    choices: ["return", "generate", "yield", "await"],
    correct: 2,
    topic: "advanced_python",
    difficulty: "advanced"
  },
  {
    type: "tf",
    question: "Generators in Python store all their values in memory at once.",
    choices: ["True", "False"],
    correct: 1,
    topic: "advanced_python",
    difficulty: "advanced"
  },
  {
    type: "mc",
    question: "What is the output?\n\ndef countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\n\nc = countdown(3)\nprint(next(c))\nprint(next(c))",
    choices: ["3 2", "3 3", "2 1", "3 2 1"],
    correct: 0,
    topic: "advanced_python",
    difficulty: "advanced"
  },
  {
    type: "fill",
    question: "Convert a generator expression to a list:\nsquares = list(x**2 for x in _____(10))",
    answer: "range",
    topic: "advanced_python",
    difficulty: "advanced"
  },
  {
    type: "mc",
    question: "What is the time complexity of iterating through a generator that yields n items?",
    choices: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correct: 2,
    topic: "advanced_python",
    difficulty: "advanced"
  },

  // ─────────────────────────────────────────────
  // ADVANCED — Collections & Data Structures
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "Which collection from the `collections` module is an ordered dictionary that remembers insertion order?",
    choices: ["OrderedDict", "defaultdict", "Counter", "ChainMap"],
    correct: 0,
    topic: "advanced_python",
    difficulty: "advanced"
  },
  {
    type: "tf",
    question: "`collections.deque` provides O(1) append and pop operations on both ends.",
    choices: ["True", "False"],
    correct: 0,
    topic: "advanced_python",
    difficulty: "advanced"
  },
  {
    type: "mc",
    question: "What does `collections.Counter('hello')` return?",
    choices: [
      "{'h':1, 'e':1, 'l':2, 'o':1}",
      "{'h':1, 'e':1, 'l':1, 'l':1, 'o':1}",
      "['h','e','l','l','o']",
      "Error"
    ],
    correct: 0,
    topic: "advanced_python",
    difficulty: "advanced"
  },
  {
    type: "fill",
    question: "Create a defaultdict that defaults to an empty list:\nfrom collections import defaultdict\nd = defaultdict(_____)",
    answer: "list",
    topic: "advanced_python",
    difficulty: "advanced"
  },
  {
    type: "mc",
    question: "What is the output?\n\nfrom collections import deque\nq = deque([1, 2, 3])\nq.appendleft(0)\nprint(q.pop())",
    choices: ["0", "1", "3", "None"],
    correct: 2,
    topic: "advanced_python",
    difficulty: "advanced"
  },

  // ─────────────────────────────────────────────
  // ADVANCED — Error Handling & Context Managers
  // ─────────────────────────────────────────────
  {
    type: "mc",
    question: "What keyword is used to catch exceptions in Python?",
    choices: ["catch", "except", "handle", "rescue"],
    correct: 1,
    topic: "advanced_python",
    difficulty: "advanced"
  },
  {
    type: "tf",
    question: "The `finally` block in Python always executes, regardless of whether an exception occurred.",
    choices: ["True", "False"],
    correct: 0,
    topic: "advanced_python",
    difficulty: "advanced"
  },
  {
    type: "mc",
    question: "What is the output?\n\ntry:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print('zero')\nexcept Exception:\n    print('error')\nelse:\n    print('success')\nfinally:\n    print('done')",
    choices: ["zero done", "zero", "error done", "zero success done"],
    correct: 0,
    topic: "advanced_python",
    difficulty: "advanced"
  },
  {
    type: "fill",
    question: "Create a context manager using the `with` statement to open a file:\nwith _____('file.txt', 'r') as f:\n    content = f.read()",
    answer: "open",
    topic: "advanced_python",
    difficulty: "advanced"
  },
  {
    type: "mc",
    question: "What is the purpose of the `raise` keyword in Python?",
    choices: [
      "To manually trigger an exception",
      "To increase a variable's value",
      "To promote a local variable to global",
      "To lift a function's return value"
    ],
    correct: 0,
    topic: "advanced_python",
    difficulty: "advanced"
  }

];