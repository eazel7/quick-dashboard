#  Parts metrology

## Backend

The backend will report the measurements in the following format: 

```json
{
    "partName": [{
        "x": {
            "deviation": number,
            "deviationTolerance": number
        },
        "y": {
            "deviation": number,
            "deviationTolerance": number
        },

        "z": {
            "deviation": number,
            "deviationTolerance": number
        },

        "diameter": {
            "deviation": number,
            "deviationTolerance": number
        }
    }]
}
```

To run it, execute `run-backend.sh`

## Frontend

To run the frontend, execute `run-frontend.sh`.