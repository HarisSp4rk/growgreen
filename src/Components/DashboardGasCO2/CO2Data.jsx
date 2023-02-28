export const dummy_data = {
    "getcarbondioxide": {
        "median": {
            "aggregations": {
                "count_documents": {
                    "value": 944
                },
                "avg_price": {
                    "values": {
                        "50.0": 0.04622291657142341
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
                                    "50.0": 0.04622291657142341
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
                    "value": 0.0457075212261308
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
                                "value": 0.0457075212261308
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
                    "value": 457.07521186440675
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
                                "value": 457.07521186440675
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
                        "50.0": 462.2291666666667
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
                                    "50.0": 462.2291666666667
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