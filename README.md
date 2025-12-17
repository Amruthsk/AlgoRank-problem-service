## Problem Setting Service




-----------------------------------------

# how routing is working in the project
- /api/v1/problems/ping
    - because the route starts with /api
        - call /api -> /v1 -> /problems -> /ping
        - **Flow:** apiRouter -> v1Router -> problemRouter -> ProblemController
        - **Middleware:** apiRouter, v1Router, problemRouter (all are middleware that forward the request)
        - **Controller:** ProblemController (The endpoint that executes business logic or sends the final response)