export const dummy_data = {
    "getmethane": {
        "median": {
            "aggregations": {
                "count_documents": {
                    "value": 944
                },
                "avg_price": {
                    "values": {
                        "50.0": 0.002024733325621734
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
                                    "50.0": 0.002024733325621734
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
                    "value": 0.002045170551062225
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
                                "value": 0.002045170551062225
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
        },
        "avergeppm": {
            "aggregations": {
                "avg_price": {
                    "value": 19.95021186440678
                }
            }
        },
        "averageppmgraph": {
            "aggregations": {
                "group_by_month": {
                    "buckets": [
                        {
                            "key_as_string": "2023-02-20T00:00:00.000Z",
                            "key": 1676851200000,
                            "doc_count": 944,
                            "avg_percentage": {
                                "value": 19.95021186440678
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
        },
        "medianppm": {
            "aggregations": {
                "avg_price": {
                    "values": {
                        "50.0": 20
                    }
                }
            }
        },
        "medianppmgraph": {
            "aggregations": {
                "group_by_month": {
                    "buckets": [
                        {
                            "key_as_string": "2023-02-20T00:00:00.000Z",
                            "key": 1676851200000,
                            "doc_count": 944,
                            "avg_percentage": {
                                "values": {
                                    "50.0": 20
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
        }
    }
}