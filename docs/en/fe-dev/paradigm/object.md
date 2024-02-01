---
title: Object theorem
---
# Object theorem

### purpose of writing
Software components are mostly made up of objects, relationships between objects, conditional statements, and loop statements.

This time, we organized the contents about objects. Handling objects can be said to be essential in solving real world problems. Rather than organizing my personal opinions, I excerpted several books and wrote about objects and object-orientation.

### index
- What is an object?
- Objects and data structures
- The essence of object orientation
- Object roles and responsibilities
- Related Posts

### What is an object?
**An object** is an identifiable entity or thing. An object may be a concrete object that can be touched, such as a car, or an abstract concept, such as time. Objects have distinguishable identifiers, characteristic behaviors, and mutable states. In software, objects are implemented through stored state and executable code.

An object is defined as an entity that has both **state** and **behavior**. This means that if an object must perform an action to participate in **cooperation**, **it must also have the state necessary to perform that action. In order for an object to remain an autonomous being** that makes its own judgments and decisions in the process of participating in cooperation, it must possess the necessary actions and states.

#### state of the object
**State** is a set of information possessed by an object at a specific point in time and expresses the structural characteristics of the object. The state of an object consists of static properties and dynamic property values ​​that exist in the object. The properties of an object can be divided into **simple values ​​and links that refer to** other objects.

#### behavior of objects
**Actions** are activities that act and react in response to external requests or received messages. As a result of an action, an object can **change its state** or **pass a message to another object**. Because objects participate in cooperation with other objects through their actions, their actions must be externally visible.

#### identifier
**An identifier** is a property of an object used to distinguish one object from another. Because the value does not have an identifier, the two instances must be compared through an **equality check using state**. Because the state of an object can change, two instances can be compared through an **equality check using an identifier**.

### Objects and data structures
#### What is data structure?
**Data structures** tell us how data is actually structured in a computer's memory and how to access that data. Data structures are a necessary method to implement abstract data types into actual data processing modules. Representative examples include arrays, trees, and graphs.

**Arrays** are created by allocating contiguous space in memory. Items to be stored in an array are recorded sequentially in the memory space.

**Trees** use memory compartments to store information. Therefore, the tree also does not require contiguous physical memory. The cell of the tree also has a pointer to a cell other than the storage target.

**A graph** is a data structure similar to a tree. The difference from a tree is that there is no concept of child-parent vertices, and therefore there is no root vertex. In a graph, data can be freely arranged into vertices and edges.

#### Data structures and object asymmetry
**Objects** hide data behind abstraction and **expose only functions that handle data**. **The data structure** exposes the data as is and **does not provide any special functions**.

The typical form of a data structure is a class with only public variables and no functions. These data structures are sometimes called Data Transfer Objects (DTOs). DTO is a very useful structure. It is especially useful when communicating with a database or parsing messages received from a socket.

DTO is often the first structure used in a series of steps that convert raw information stored in a database into objects to be used in application code.

### The essence of object orientation
**Object-oriented** is a method of viewing a system as a community of interacting **autonomous objects and dividing the system using objects**. **An autonomous object** means an object that has both state and behavior and is responsible for itself. Objects **cooperate with other objects** to implement the behavior of the system . Each object performs a defined role within the collaboration, and **a role** is a set of related **responsibilities**. Objects **send messages** to cooperate with other objects , and the object that **receives the message** autonomously selects an appropriate **method** to process the message.

#### The core of object-oriented, message
Most people who use class-based object-oriented languages ​​think of an object-oriented application as a collection of classes. From a programmer's perspective, a class is a concrete entity that can actually be viewed and modified. Many object-oriented books focus on how to declare classes and define properties and methods. Most beginners are taught that inheritance relationships between classes are the core mechanism that makes object-oriented design valuable. Much discussion of object-oriented design focuses on what responsibilities to assign to classes and how to manage dependencies between classes. After all, isn't the goal of good object-oriented programming to create great classes?

It is true that classes are an important abstraction tool that can be used to implement code, but the power of object orientation comes not from classes, but from the messages that objects exchange. Object-oriented applications are built using classes, but are defined through messages. What actually makes an application alive are objects, not classes. And what determines the outline of these objects are the messages they exchange.

A class is simply an abstraction tool that can be used to express the characteristics and behavior of dynamic objects in static text. What is important is the object, not the class. The first step is not to define a class, but to identify the properties and behavior of objects. A class is just a framework that contains the properties and behavior of an object. You can even express the properties and behavior of an object without using a class.

A class-centric design is inflexible and difficult to extend. The transition to an object-oriented paradigm begins with viewing the system not as a set of static classes but as a set of dynamic objects that exchange messages. In order to capture the common behavior and properties of objects to be included in a class, you must first view the system from the perspective of the cooperating objects.

Removing classes from the throne of the object-oriented world does not solve all problems. The leap to a truly object-oriented paradigm occurs when we focus not on individual objects but on communication between objects sending and receiving messages.

### Object roles and responsibilities
#### role of object
**A role** is a kind of marker that indicates that an object can be replaced by another object within a collaboration. In collaboration, a role is equivalent to saying, “This position can take the place of any object that can fulfill that role.”

Multiple objects can perform the same role. Role means **fungibility**. Each object can autonomously choose how to carry out its responsibilities. One object can perform multiple roles at the same time.

#### Responsibility for determining design quality
The basic unit of an object-oriented community is an autonomous object. Objects cooperate to implement the functions of the application, and during the cooperation process, they make decisions and act autonomously to fulfill their respective responsibilities.

The only reason an object does something is because it has received a request from another object. The actions performed by an object to process a request are called **responsibilities**. Therefore, an autonomous object means an object that carries out its own responsibilities according to its own will and judgment.

The beauty of object-oriented design is revealed in the process of assigning appropriate responsibilities to appropriate objects. Assumptions for designing object-oriented applications A popular method is called responsibility-driven design because the selection of appropriate responsibilities determines the direction of the entire design.

Appropriate responsibility creates autonomous objects, and autonomous objects come together to create flexible and simple cooperation. Therefore, how autonomous the objects participating in the collaboration are determines the quality of the overall application.

### summary
- Object: An entity that has both state and behavior.
- Data Structure: How data is actually structured in memory and how to access that data.
- Object Orientation: A method of viewing a system as a community of interacting autonomous objects and dividing the system using objects.

### references
- Robert C. Martin. 『Clean Code』. Jae-ho Park, Lee Hae-young (translated). Insight, 2013.
- Youngho Cho. 『Facts and Misconceptions of Object Orientation』. Wikibooks, 2015.
- Vladstone Ferreira Pilu. 『Computer Science Roadmap in One Volume』. Park Yeon-oh (translation). Insight, 2018.