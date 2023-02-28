export const dummy_data = {
    "getcarbonmonoxide": {
        "median": {
            "aggregations": {
                "count_documents": {
                    "value": 944
                },
                "avg_price": {
                    "values": {
                        "50.0": 0.0010029999539256096
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
                                    "50.0": 0.0010029999539256096
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
                    "value": 0.0009745328372168765
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
                                "value": 0.0009745328372168765
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
                    "value": 9.275423728813559
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
                                "value": 9.275423728813559
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
                        "50.0": 10
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
                                    "50.0": 10
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