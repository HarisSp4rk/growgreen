export const data_dummy = {
    "gettemperature": {
        "median": {
            "aggregations": {
                "count_documents": {
                    "value": 944
                },
                "avg_price": {
                    "values": {
                        "50.0": 28
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
                                    "50.0": 28
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
                        },
                        {
                            "key_as_string": "2023-02-20T00:00:00.000Z",
                            "key": 1676851200000,
                            "doc_count": 944,
                            "avg_percentage": {
                                "values": {
                                    "50.0": 17
                                }
                            }
                        },
                        {
                            "key_as_string": "2023-02-21T00:00:00.000Z",
                            "key": 1676937600000,
                            "doc_count": 0,
                            "avg_percentage": {
                                "values": {
                                    "50.0": 43
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
                    "value": 27.360169491525422
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
                                "value": 27
                            }
                        },
                        {
                            "key_as_string": "2023-02-20T00:00:00.000Z",
                            "key": 1676851200000,
                            "doc_count": 944,
                            "avg_percentage": {
                                "value": 9
                            }
                        },
                        {
                            "key_as_string": "2023-02-20T00:00:00.000Z",
                            "key": 1676851200000,
                            "doc_count": 944,
                            "avg_percentage": {
                                "value": 29
                            }
                        },
                        {
                            "key_as_string": "2023-02-20T00:00:00.000Z",
                            "key": 1676851200000,
                            "doc_count": 944,
                            "avg_percentage": {
                                "value": 46
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
};