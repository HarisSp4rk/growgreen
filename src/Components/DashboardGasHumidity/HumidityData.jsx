export const dummy_data = {
    "gethumidity": {
        "median": {
            "aggregations": {
                "count_documents": {
                    "value": 944
                },
                "avg_price": {
                    "values": {
                        "50.0": 79
                    }
                }
            }
        },
        "mediangraph": {
            "aggregations": {
                "group_by_month": {
                    "buckets": [
                        {
                            "key_as_string": "2023-02-20T00:00:00.000Z",
                            "key": 1676851200000,
                            "doc_count": 944,
                            "avg_percentage": {
                                "values": {
                                    "50.0": 79
                                }
                            }
                        },
                        {
                            "key_as_string": "2023-02-21T00:00:00.000Z",
                            "key": 1676937600000,
                            "doc_count": 0,
                            "avg_percentage": {
                                "values": {
                                    "50.0": null
                                }
                            }
                        }
                    ]
                }
            }
        },
        "average": {
            "aggregations": {
                "avg_price": {
                    "value": 79.6885593220339
                }
            }
        },
        "averagegrapph": {
            "aggregations": {
                "group_by_month": {
                    "buckets": [
                        {
                            "key_as_string": "2023-02-20T00:00:00.000Z",
                            "key": 1676851200000,
                            "doc_count": 944,
                            "avg_percentage": {
                                "value": 79.6885593220339
                            }
                        },
                        {
                            "key_as_string": "2023-02-21T00:00:00.000Z",
                            "key": 1676937600000,
                            "doc_count": 0,
                            "avg_percentage": {
                                "value": null
                            }
                        }
                    ]
                }
            }
        }
    }
}