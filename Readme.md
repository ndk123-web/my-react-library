## Doubts and Answers on React  

1. React Virtual Dom , React Fibre and Reconcilation ? 
    
    - Virtual Dom is Behind the scenes it creates a browser like tree structure

    - React fibre is ui updattion optimisation algorithm on basis that 
        - Before React 16 , all ui rendering was synchronous
        - After React fibre It becomes asynchronous and it means any rendering can be abort , pause , resume or reuse 

    - Reconcilation ( virtual DOM )
        - It's React diff Algorithm that compare one tree with another tree to check whether which part to be changed
    